/**
 * Footer — Cartoon-style dark footer with colored dot decorations.
 */
export default function Footer() {
  return (
    <footer
      className="py-8 relative"
      style={{ background: '#1D1D1D', borderTop: '2.5px solid #1D1D1D' }}
    >
      {/* Colored dots decoration */}
      <div className="absolute top-4 left-6 flex gap-2">
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E63946' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFD166' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2EC4B6' }} />
      </div>
      <div className="absolute top-4 right-6 flex gap-2">
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2EC4B6' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFD166' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E63946' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <p
          style={{
            fontFamily: '"Outfit", system-ui, sans-serif',
            color: '#FDF6EC',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}
        >
          Designed &amp; built by{' '}
          <span style={{ color: '#E63946' }}>Himanshu Panwar</span>{' '}
          · 2026
        </p>
      </div>
    </footer>
  )
}
