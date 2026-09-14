import { NextRequest, NextResponse } from 'next/server';
import type { PortfolioFormType } from '@/lib/submitHubSpotForm';

const HUBSPOT_PORTAL_ID = '50435581';
const MINIMUM_COMPLETION_TIME_MS = 900;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_REQUEST_BYTES = 16_000;

type FieldDefinition = {
  name: string;
  required: boolean;
  maxLength: number;
  allowedValues?: readonly string[];
  type?: 'email';
};

type FormDefinition = {
  formId: string;
  fields: readonly FieldDefinition[];
};

const formDefinitions: Record<PortfolioFormType, FormDefinition> = {
  contact: {
    formId: '62ca9a11-cbe6-4b00-82a6-a83ea792c9a8',
    fields: [
      { name: 'firstname', required: true, maxLength: 80 },
      { name: 'lastname', required: true, maxLength: 80 },
      { name: 'email', required: true, maxLength: 254, type: 'email' },
      {
        name: 'project_type',
        required: true,
        maxLength: 80,
        allowedValues: [
          'HubSpot / CRM',
          'Website / Landing Page',
          'Automation / AI Workflow',
          'Frontend Build',
          'Not sure yet'
        ]
      },
      {
        name: 'budget_or_timeline',
        required: true,
        maxLength: 80,
        allowedValues: ['Small fix', 'Project build', 'Ongoing support', 'Not sure yet']
      },
      {
        name: 'best_time_to_reach_you',
        required: true,
        maxLength: 80,
        allowedValues: ['Morning', 'Afternoon', 'Evening', 'Async is fine']
      },
      { name: 'project_details', required: true, maxLength: 4000 }
    ]
  },
  footer: {
    formId: 'dd07c6fe-8f84-443e-bae5-c7528d29d414',
    fields: [
      { name: 'email', required: true, maxLength: 254, type: 'email' },
      { name: 'project_details', required: true, maxLength: 2000 }
    ]
  }
};

const submissionLog = new Map<string, number[]>();

function getClientIp(request: NextRequest) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function exceedsRateLimit(key: string) {
  const now = Date.now();
  const recentSubmissions = (submissionLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentSubmissions.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionLog.set(key, recentSubmissions);
    return true;
  }

  recentSubmissions.push(now);
  submissionLog.set(key, recentSubmissions);
  return false;
}

function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  const requestHost =
    request.headers.get('x-forwarded-host')?.split(',')[0]?.trim() ?? request.headers.get('host');

  if (!origin || !requestHost) return true;

  try {
    return new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function cleanText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function safePageUri(value: unknown, request: NextRequest) {
  const pageUri = cleanText(value);

  if (!pageUri || pageUri.length > 500) return request.nextUrl.origin;

  try {
    const parsedUrl = new URL(pageUri);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
      ? parsedUrl.toString()
      : request.nextUrl.origin;
  } catch {
    return request.nextUrl.origin;
  }
}

function validateFields(definition: FormDefinition, value: unknown) {
  if (!isRecord(value)) {
    return { error: 'Please complete the required fields.' } as const;
  }

  const fields: Array<{ name: string; value: string }> = [];

  for (const field of definition.fields) {
    const fieldValue = cleanText(value[field.name]);

    if (field.required && !fieldValue) {
      return { error: 'Please complete every required field.' } as const;
    }

    if (fieldValue.length > field.maxLength) {
      return { error: 'One or more fields are longer than allowed.' } as const;
    }

    if (field.type === 'email' && !isEmail(fieldValue)) {
      return { error: 'Please enter a valid email address.' } as const;
    }

    if (field.allowedValues && !field.allowedValues.includes(fieldValue)) {
      return { error: 'Please choose a valid option.' } as const;
    }

    if (fieldValue) fields.push({ name: field.name, value: fieldValue });
  }

  return { fields } as const;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ message: 'This message is too large to send.' }, { status: 413 });
  }

  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: 'This form submission was not accepted.' }, { status: 403 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'The form submission was invalid.' }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ message: 'The form submission was invalid.' }, { status: 400 });
  }

  const formType = body.formType;

  if (formType !== 'contact' && formType !== 'footer') {
    return NextResponse.json({ message: 'The form submission was invalid.' }, { status: 400 });
  }

  // Silently accept honeypot submissions so automated senders receive no useful signal.
  if (cleanText(body.honeypot)) {
    return NextResponse.json({ message: 'Thanks — your message has been received.' });
  }

  const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0;

  if (!startedAt || Date.now() - startedAt < MINIMUM_COMPLETION_TIME_MS) {
    return NextResponse.json(
      { message: 'Please take a moment to review the form before sending it.' },
      { status: 400 }
    );
  }

  const clientIp = getClientIp(request);

  if (exceedsRateLimit(`${formType}:${clientIp}`)) {
    return NextResponse.json(
      { message: 'Too many messages were sent. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  const definition = formDefinitions[formType];
  const validation = validateFields(definition, body.fields);

  if ('error' in validation) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  const hutk = request.cookies.get('hubspotutk')?.value;
  const context: Record<string, string> = {
    pageUri: safePageUri(body.pageUri, request),
    pageName: cleanText(body.pageName).slice(0, 120) || 'Rahib Azam Portfolio',
    ipAddress: clientIp
  };

  if (hutk) context.hutk = hutk;

  try {
    const hubSpotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${definition.formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          submittedAt: Date.now().toString(),
          fields: validation.fields,
          context
        }),
        cache: 'no-store',
        signal: AbortSignal.timeout(10_000)
      }
    );

    if (!hubSpotResponse.ok) {
      console.error('HubSpot form submission failed', {
        formType,
        status: hubSpotResponse.status
      });

      return NextResponse.json(
        { message: 'Your message could not be delivered right now. Please try again shortly.' },
        { status: hubSpotResponse.status === 429 ? 429 : 502 }
      );
    }

    return NextResponse.json({ message: 'Thanks — your message has been sent.' });
  } catch (error) {
    console.error('HubSpot form submission request failed', {
      formType,
      cause: error instanceof Error ? error.name : 'UnknownError'
    });

    return NextResponse.json(
      { message: 'Your message could not be delivered right now. Please try again shortly.' },
      { status: 502 }
    );
  }
}
