import { ImageResponse } from 'next/og';
import { profile } from '@/data/portfolio';

export const alt = 'Saurav Priyanshu - Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#E8ECF5',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '80px',
            border: '1px solid #232D4A',
            borderRadius: '24px',
            width: '90%',
            height: '80%',
            background: '#111729',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            {profile.name}
          </div>
          <div style={{ display: 'flex', fontSize: 36, color: '#8A94AD', marginBottom: '48px', fontWeight: 500 }}>
            {profile.title}
          </div>
          <div style={{ display: 'flex', width: '80px', height: '6px', background: '#5B6CFF', borderRadius: '4px' }}></div>
        </div>
      </div>
    ),
    { ...size }
  );
}
