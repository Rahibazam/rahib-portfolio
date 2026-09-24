'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const OWNER_TELEMETRY_OPT_OUT_KEY = 'rahib-owner-telemetry-opt-out';

function isOwnerTelemetryDisabled() {
  try {
    return window.localStorage.getItem(OWNER_TELEMETRY_OPT_OUT_KEY) === '1';
  } catch {
    return false;
  }
}

export function VercelTelemetry() {
  return (
    <>
      <Analytics beforeSend={(event) => (isOwnerTelemetryDisabled() ? null : event)} />
      <SpeedInsights beforeSend={(event) => (isOwnerTelemetryDisabled() ? null : event)} />
    </>
  );
}
