import { useInView } from '../hooks/useInView'

/**
 * Experience — Timeline-style layout with vertical accent line.
 * Cartoon theme: thick dashed timeline, colorful badges, comic cards.
 */

const EXPERIENCE = [
  {
    company: 'Slog Solutions Pvt. Ltd.',
    role: 'Software Developer Intern',
    duration: 'Apr 2026 – Present',
    location: 'Dehradun, India',
    bullets: [
      'Built an AI-powered LMS using Ollama with translation, TTS, summarization, and prompt assistance features',
      'Developed an offline exam portal with secure auth, assessment workflows, and candidate evaluation functionality',
      'Working on REST APIs, MongoDB, PostgreSQL, and scalable full-stack architecture using React, Next.js, TypeScript',
    ],
  },
]

const BULLET_COLORS = ['#E63946', '#2EC4B6', '#FFD166']

export default function Experience() {
  const [ref, isVisible] = useInView({ threshold: 0.15 })

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#FDF6EC' }}>
      {/* Subtle background orb */}
      <div className="orb orb-3 -bottom-32 -left-32 opacity-40" />
      <div className="absolute top-0 left-0 w-full h-[2.5px]" style={{ background: '#1D1D1D' }} />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <h2 className="section-title">
          Experience
        </h2>
        <div className="section-line" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line — thick dashed */}
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-[3px] rounded-full"
            style={{
              background: 'repeating-linear-gradient(180deg, #1D1D1D 0px, #1D1D1D 8px, transparent 8px, transparent 16px)'
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-14 md:pl-20 pb-4">
              {/* Timeline dot */}
              <div
                className="absolute left-[10px] md:left-[18px] top-2 w-4 h-4 rounded-full z-10"
                style={{
                  background: '#E63946',
                  border: '2.5px solid #1D1D1D',
                  boxShadow: '2px 2px 0px #1D1D1D'
                }}
              />

              {/* Card */}
              <article className="global-card p-8 md:p-10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3
                    className="text-xl md:text-2xl"
                    style={{
                      fontFamily: '"Outfit", system-ui, sans-serif',
                      fontWeight: 800,
                      color: '#1D1D1D'
                    }}
                  >
                    {exp.company}
                  </h3>
                  <span
                    className="text-xs sm:text-sm whitespace-nowrap px-3 py-1 rounded-full"
                    style={{
                      background: '#FFD166',
                      color: '#1D1D1D',
                      fontWeight: 600,
                      border: '2px solid #1D1D1D',
                      boxShadow: '2px 2px 0px #1D1D1D'
                    }}
                  >
                    {exp.duration} · {exp.location}
                  </span>
                </div>

                <p
                  className="text-sm mb-6"
                  style={{ color: '#2EC4B6', fontWeight: 600 }}
                >
                  {exp.role}
                </p>

                {/* Bullet points */}
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="relative pl-6 text-sm sm:text-[0.94rem] leading-relaxed"
                      style={{ color: '#3A3A3A', fontWeight: 400 }}
                    >
                      <span
                        className="absolute left-0 top-[7px] w-[10px] h-[10px] rounded-full"
                        style={{
                          background: BULLET_COLORS[j % BULLET_COLORS.length],
                          border: '1.5px solid #1D1D1D'
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
