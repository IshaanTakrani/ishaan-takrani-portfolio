import { ImageResponse } from 'next/og'

export const alt = 'Ishaan Takrani – Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '80px',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top-right URL */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            fontSize: '13px',
            color: '#F97316',
            letterSpacing: '4px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          ishaantakrani.com
        </div>

        {/* Orange accent line */}
        <div
          style={{
            width: '56px',
            height: '4px',
            background: '#F97316',
            marginBottom: '36px',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 700,
            color: '#FAFAFA',
            lineHeight: 1,
            marginBottom: '24px',
            letterSpacing: '-2px',
          }}
        >
          ISHAAN TAKRANI
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: '22px',
            color: '#888888',
            letterSpacing: '0.5px',
          }}
        >
          Software Developer · Founder · Educator
        </div>

        {/* Bottom-right label */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            fontSize: '13px',
            color: '#2E2E2E',
            letterSpacing: '2px',
            fontFamily: 'monospace',
          }}
        >
          CS @ Toronto Metropolitan University
        </div>
      </div>
    ),
    { ...size },
  )
}
