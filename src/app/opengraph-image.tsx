import { ImageResponse } from 'next/og';

export const alt = 'Rahib Azam — CRM and Web Technologist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 94px',
        color: '#ffffff',
        background: 'linear-gradient(130deg, #071426 0%, #0b1533 55%, #211748 100%)',
        border: '2px solid #0ac4ff'
      }}
    >
      <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, letterSpacing: 8, color: '#0ac4ff' }}>
        WEB · HUBSPOT · CRM · AUTOMATION
      </div>
      <div style={{ display: 'flex', marginTop: 48, fontSize: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>
        RAHIB AZAM
      </div>
      <div style={{ display: 'flex', marginTop: 28, fontSize: 39, fontWeight: 700, color: '#9acbff' }}>
        CRM &amp; WEB TECHNOLOGIST
      </div>
      <div style={{ display: 'flex', marginTop: 54, width: 620, height: 7, background: 'linear-gradient(90deg, #0ac4ff, #8b6cff)' }} />
      <div style={{ display: 'flex', marginTop: 20, fontSize: 23, color: '#cbd8ef' }}>
        HubSpot · Automation · Reporting · Web Systems
      </div>
    </div>,
    size
  );
}
