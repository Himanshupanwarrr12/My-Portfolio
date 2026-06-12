import { useTypewriter } from '../hooks/useTypewriter'
import EmoRobo from './EmoRobo'

/**
 * Hero — Full-viewport landing section.
 * Two-column layout: left = name/description, right = EmoRobo character.
 * Cartoon theme: playful doodle shapes, bold typography, comic-style CTAs.
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
      className="relative min-h-screen flex items-center hero-bg overflow-hidden"
    >
      {/* ---- Decorative cartoon shapes ---- */}
      {/* Yellow circle */}
      <div
        className="absolute cartoon-wiggle pointer-events-none"
        style={{
          top: '10%', left: '5%',
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
          top: '15%', right: '5%',
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
          bottom: '20%', left: '8%',
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
          bottom: '30%', right: '8%',
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
      <div className="absolute pointer-events-none" style={{ top: '35%', left: '22%', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--dt-text-primary)', opacity: 0.12 }} />
      <div className="absolute pointer-events-none" style={{ top: '60%', right: '30%', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--dt-text-primary)', opacity: 0.1 }} />
      <div className="absolute pointer-events-none" style={{ top: '45%', left: '45%', width: '10px', height: '10px', borderRadius: '50%', background: '#E63946', opacity: 0.15 }} />

      {/* ---- Two-Column Layout ---- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* LEFT SIDE — Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
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
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div style={{ width: '40px', height: '2.5px', background: 'var(--dt-text-primary)', borderRadius: '2px' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E63946', border: '2px solid var(--dt-border)' }} />
            <div style={{ width: '40px', height: '2.5px', background: 'var(--dt-text-primary)', borderRadius: '2px' }} />
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.06] mb-5"
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
            className="flex items-center justify-center md:justify-start gap-1 tracking-[0.02em] mb-5 min-h-[2em]"
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
            className="text-base sm:text-lg tracking-wide mb-10 max-w-md leading-relaxed"
            style={{ color: 'var(--dt-text-secondary)', fontWeight: 400 }}
          >
            I build fast, scalable, production-ready web apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
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

        {/* RIGHT SIDE — Emo Robot */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="transform scale-[1.6] md:scale-[2] origin-center">
            <EmoRobo />
          </div>
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
