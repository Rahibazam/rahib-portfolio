export type PortfolioFormType = 'contact' | 'footer';

type SubmitHubSpotFormOptions = {
  formType: PortfolioFormType;
  fields: Record<string, string>;
  startedAt: number;
  honeypot: string;
  pageName: string;
};

type FormSubmissionResponse = {
  message?: string;
};

export async function submitHubSpotForm({
  formType,
  fields,
  startedAt,
  honeypot,
  pageName
}: SubmitHubSpotFormOptions) {
  const response = await fetch('/api/forms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formType,
      fields,
      startedAt,
      honeypot,
      pageName,
      pageUri: window.location.href
    })
  });

  const result = (await response.json().catch(() => ({}))) as FormSubmissionResponse;

  if (!response.ok) {
    throw new Error(result.message ?? 'Your message could not be sent. Please try again.');
  }

  return result;
}
