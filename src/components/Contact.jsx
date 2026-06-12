import { useInView } from '../hooks/useInView'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

/**
 * Contact — Centered section with cartoon card and colorful accents.
 */
export default function Contact() {
  const [ref, isVisible] = useInView({ threshold: 0.15 })

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#FFF8EE' }}>
      {/* Background decorations */}
      <div className="orb orb-2 top-[10%] left-[10%] opacity-35" />
      <div className="orb orb-3 bottom-[5%] right-[15%] opacity-25" />
      <div className="absolute top-0 left-0 w-full h-[2.5px]" style={{ background: '#1D1D1D' }} />

      {/* Particles */}
      <div className="particle left-[20%] bottom-0" style={{ animationDuration: '14s', animationDelay: '0s' }} />
      <div className="particle left-[50%] bottom-0" style={{ animationDuration: '18s', animationDelay: '3s' }} />
      <div className="particle left-[80%] bottom-0" style={{ animationDuration: '16s', animationDelay: '6s' }} />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <h2 className="section-title">
          Contact
        </h2>
        <div className="section-line mb-10" />

        <div className="max-w-xl mx-auto text-center">
          {/* Card */}
          <div className="global-card p-10 md:p-14 relative overflow-hidden">
            {/* Colored corner shapes */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
              style={{
                background: '#FFD166',
                borderBottomLeftRadius: '18px',
                borderLeft: '2.5px solid #1D1D1D',
                borderBottom: '2.5px solid #1D1D1D'
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none"
              style={{
                background: '#2EC4B6',
                borderTopRightRadius: '18px',
                borderRight: '2.5px solid #1D1D1D',
                borderTop: '2.5px solid #1D1D1D'
              }}
            />

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl tracking-tight mb-4 leading-snug relative z-10"
              style={{
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 800,
                color: '#1D1D1D'
              }}
            >
              Let's build something{' '}
              <span style={{ color: '#E63946' }}>great</span>{' '}
              together.
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base mb-9 leading-relaxed relative z-10" style={{ color: '#3A3A3A', fontWeight: 400 }}>
              Open to opportunities, collaborations, and interesting
              conversations.
            </p>

            {/* Email button */}
            <a
              href="mailto:himanshupanwar.dev@gmail.com"
              className="group inline-flex items-center gap-2.5 text-sm tracking-wide transition-all duration-400 hover:-translate-y-[3px] mb-9 relative z-10"
              style={{
                padding: '14px 28px',
                borderRadius: '50px',
                background: '#E63946',
                color: '#fff',
                fontFamily: '"Outfit", system-ui, sans-serif',
                fontWeight: 700,
                border: '2.5px solid #1D1D1D',
                boxShadow: '4px 4px 0px #1D1D1D'
              }}
            >
              <FiMail className="w-4 h-4" />
              himanshupanwar.dev@gmail.com
              <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>

            {/* Social links */}
            <div className="flex justify-center gap-4 relative z-10">
              <a
                href="https://github.com/himanshupanwarrr12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  border: '2.5px solid #1D1D1D',
                  background: '#fff',
                  color: '#1D1D1D',
                  boxShadow: '3px 3px 0px #1D1D1D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2EC4B6'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.color = '#1D1D1D'
                }}
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/himanshu-war"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:-translate-y-[3px]"
                style={{
                  border: '2.5px solid #1D1D1D',
                  background: '#fff',
                  color: '#1D1D1D',
                  boxShadow: '3px 3px 0px #1D1D1D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFD166'
                  e.currentTarget.style.color = '#1D1D1D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.color = '#1D1D1D'
                }}
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
