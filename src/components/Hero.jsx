import { useTypewriter } from '../hooks/useTypewriter'

/**
 * Hero — Full-viewport landing section.
 * Centered typography-led layout: single centered block, minimalist style.
 * Decorative floating shapes and a faded code glyph add depth.
 */

const PHRASES = [
  'Software Developer',
  'Full-Stack Engineer',
  'React & Node.js Builder',
  'Microservices Enthusiast',
]

export default function Hero() {
  const displayText = useTypewriter(PHRASES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden"
    >
      {/* ---- Large faded </> background glyph ---- */}
      <div
        className="hero-glyph hidden md:block"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(14rem, 25vw, 32rem)',
          letterSpacing: '-0.05em',
        }}
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>

      {/* ---- Decorative cartoon shapes ---- */}
      {/* Yellow circle */}
      <div
        className="absolute cartoon-wiggle pointer-events-none"
        style={{
          top: '12%', right: '15%',
          width: '70px', height: '70px',
          borderRadius: '50%',
          background: '#FFD166',
          border: '2.5px solid var(--dt-border)',
          boxShadow: '3px 3px 0px var(--dt-shadow)',
          opacity: 0.6
        }}
      />
      {/* Teal square */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '65%', right: '12%',
          width: '50px', height: '50px',
          borderRadius: '14px',
          background: '#2EC4B6',
          border: '2.5px solid var(--dt-border)',
          boxShadow: '3px 3px 0px var(--dt-shadow)',
          transform: 'rotate(15deg)',
          opacity: 0.5,
          animation: 'wiggle 4s ease-in-out infinite'
        }}
      />
      {/* Pink circle */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '22%', left: '10%',
          width: '45px', height: '45px',
          borderRadius: '50%',
          background: '#FF6B8A',
          border: '2.5px solid var(--dt-border)',
          boxShadow: '3px 3px 0px var(--dt-shadow)',
          opacity: 0.4
        }}
      />
      {/* Red shape */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '12%',
          width: '40px', height: '40px',
          borderRadius: '10px',
          background: '#E63946',
          border: '2.5px solid var(--dt-border)',
          boxShadow: '3px 3px 0px var(--dt-shadow)',
          transform: 'rotate(-12deg)',
          opacity: 0.4,
          animation: 'wiggle 5s ease-in-out infinite reverse'
        }}
      />
      {/* Small dots scattered */}
      <div className="absolute pointer-events-none" style={{ top: '20%', left: '25%', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--dt-text-primary)', opacity: 0.12 }} />
      <div className="absolute pointer-events-none" style={{ top: '70%', right: '22%', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--dt-text-primary)', opacity: 0.1 }} />
      <div className="absolute pointer-events-none" style={{ top: '45%', right: '35%', width: '10px', height: '10px', borderRadius: '50%', background: '#E63946', opacity: 0.15 }} />
      <div className="absolute pointer-events-none" style={{ top: '78%', left: '35%', width: '7px', height: '7px', borderRadius: '50%', background: '#2EC4B6', opacity: 0.12 }} />
      <div className="absolute pointer-events-none" style={{ top: '15%', left: '50%', width: '9px', height: '9px', borderRadius: '50%', background: '#FFD166', opacity: 0.14 }} />

      {/* ---- Single Centered Container ---- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center text-center">
        {/* Badge label */}
        <div className="mb-6">
          <span
            style={{
              background: '#FFD166',
              border: '2px solid var(--dt-border)',
              borderRadius: '50px',
              padding: '6px 20px',
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#1D1D1D',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '2px 2px 0px var(--dt-shadow)',
              display: 'inline-block'
            }}
          >
            ✨ Portfolio
          </span>
        </div>

        {/* Ornamental dashes */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div style={{ width: '40px', height: '2.5px', background: 'var(--dt-text-primary)', borderRadius: '2px' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E63946', border: '2px solid var(--dt-border)' }} />
          <div style={{ width: '40px', height: '2.5px', background: 'var(--dt-text-primary)', borderRadius: '2px' }} />
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] tracking-tight leading-[1.06] mb-5"
          style={{
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 900,
            color: 'var(--dt-text-primary)'
          }}
        >
          Himanshu Panwar
        </h1>

        {/* Typewriter line */}
        <div
          className="flex items-center justify-center gap-1 tracking-[0.02em] mb-5 min-h-[2em]"
          style={{
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            fontWeight: 600,
            color: '#2EC4B6',
            fontSize: '1.3rem'
          }}
        >
          <span>{displayText}</span>
          <span className="typewriter-cursor inline-block w-[2.5px] h-[1.15em] ml-0.5 align-text-bottom" style={{ background: '#2EC4B6' }} />
        </div>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg tracking-wide mb-10 max-w-lg leading-relaxed mx-auto"
          style={{ color: 'var(--dt-text-secondary)', fontWeight: 400 }}
        >
          I build fast, scalable, production-ready web apps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              padding: '14px 36px',
              borderRadius: '50px',
              background: '#E63946',
              color: '#fff',
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              border: '2.5px solid var(--dt-border)',
              boxShadow: '4px 4px 0px var(--dt-shadow)',
              letterSpacing: '0.02em'
            }}
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              padding: '14px 36px',
              borderRadius: '50px',
              background: 'var(--dt-card-bg)',
              color: 'var(--dt-text-primary)',
              fontFamily: '"Outfit", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              border: '2.5px solid var(--dt-border)',
              boxShadow: '4px 4px 0px var(--dt-shadow)',
              letterSpacing: '0.02em'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-[0.7rem] uppercase tracking-widest font-semibold"
          style={{ fontFamily: '"Outfit", system-ui, sans-serif', color: '#E63946', fontWeight: 700 }}
        >
          Scroll
        </span>
        <div style={{ width: '2px', height: '40px', background: 'var(--dt-text-primary)', borderRadius: '2px' }} />
        <svg className="w-4 h-4 animate-bounce-down" fill="none" stroke="#E63946" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
