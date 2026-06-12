import { useInView } from '../hooks/useInView'

/**
 * About — Two-column section with bio text and enhanced avatar.
 * Cartoon theme: colorful cards, thick borders, playful avatar box.
 */
export default function About() {
  const [ref, isVisible] = useInView({ threshold: 0.15 })

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#FFF8EE' }}>
      {/* Background decoration */}
      <div className="orb orb-2 -top-20 -right-20 opacity-50" />
      {/* Dot pattern */}
      <div className="absolute inset-0 doodle-dots pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[2.5px]" style={{ background: '#1D1D1D' }} />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <h2 className="section-title">
          About Me
        </h2>
        <div className="section-line" />

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
          {/* Bio text */}
          <div className="global-card p-8 md:p-10">
            <p className="text-base sm:text-lg leading-[1.9]" style={{ color: '#3A3A3A', fontWeight: 400 }}>
              I'm a{' '}
              <strong style={{ color: '#E63946', fontWeight: 700 }}>
                Software Developer
              </strong>{' '}
              from Dehradun, currently interning at{' '}
              <strong style={{ color: '#2EC4B6', fontWeight: 700 }}>
                Slog Solutions
              </strong>{' '}
              where I build full-stack applications in React, Next.js,
              TypeScript, and Node.js. I love working on complex backend
              systems — from event-driven microservices to real-time apps. I'm
              pursuing my BCA at{' '}
              <strong style={{ color: '#1D1D1D', fontWeight: 700 }}>
                Graphic Era Deemed to Be University
              </strong>
              .
            </p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Cartoon shadow behind */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '22px',
                  background: '#FFD166',
                  border: '2.5px solid #1D1D1D',
                  transform: 'translate(8px, 8px)',
                  zIndex: 0
                }}
              />
              <div
                className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center overflow-hidden"
                style={{
                  borderRadius: '22px',
                  background: 'linear-gradient(135deg, #FFD166 0%, #2EC4B6 100%)',
                  border: '2.5px solid #1D1D1D',
                  zIndex: 1
                }}
              >
                {/* Dashed inner border */}
                <div
                  className="absolute inset-3"
                  style={{
                    borderRadius: '16px',
                    border: '2px dashed rgba(29,29,29,0.3)'
                  }}
                />
                {/* Decorative corner dots */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full" style={{ background: '#E63946', border: '1.5px solid #1D1D1D' }} />
                <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full" style={{ background: '#FF6B8A', border: '1.5px solid #1D1D1D' }} />
                <span
                  className="relative z-10 select-none"
                  style={{
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontSize: '4.5rem',
                    fontWeight: 900,
                    color: '#1D1D1D',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
                  }}
                >
                  HP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
