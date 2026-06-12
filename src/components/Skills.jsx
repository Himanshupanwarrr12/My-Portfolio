import { useInView } from '../hooks/useInView'
import { useEffect, useRef } from 'react'

/**
 * Skills — Grouped pill/badge layout with staggered fade-in.
 * Cartoon theme: colorful category cards, emoji icons, vibrant skill pills.
 */

const SKILL_GROUPS = [
  { label: 'Languages', icon: '📝', items: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'] },
  { label: 'Frontend',  icon: '🎨', items: ['React.js', 'Next.js'] },
  { label: 'Backend',   icon: '⚙️', items: ['Node.js', 'Express.js', 'Prisma', 'Mongoose', 'Drizzle'] },
  { label: 'Databases', icon: '🗄️', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Neon DB', 'SQL', 'CouchDB'] },
  { label: 'DevOps',    icon: '🐳', items: ['Docker', 'Docker Compose', 'Apache Kafka'] },
  { label: 'Tools',     icon: '🛠️', items: ['Git', 'Postman', 'VS Code', 'Bun'] },
]

const SKILL_PILL_COLORS = [
  { bg: '#FFD166', text: '#1D1D1D' },
  { bg: '#2EC4B6', text: '#1D1D1D' },
  { bg: '#FF6B8A', text: '#1D1D1D' },
  { bg: '#E63946', text: '#fff' },
  { bg: '#FFE8CC', text: '#1D1D1D' },
]

const CARD_ACCENT_COLORS = ['#E63946', '#2EC4B6', '#FFD166', '#FF6B8A', '#E63946']

export default function Skills() {
  const [ref, isVisible] = useInView({ threshold: 0.1 })
  const badgesRef = useRef(null)

  /* Staggered badge reveal */
  useEffect(() => {
    if (!isVisible || !badgesRef.current) return

    const badges = badgesRef.current.querySelectorAll('.stagger-child')
    badges.forEach((badge, i) => {
      setTimeout(() => badge.classList.add('visible'), i * 60)
    })
  }, [isVisible])

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#FDF6EC' }}>
      {/* Background decoration */}
      <div className="orb orb-1 top-[30%] right-[5%] opacity-30" />
      <div className="absolute inset-0 doodle-dots pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2.5px]" style={{ background: '#1D1D1D' }} />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <h2 className="section-title">
          Skills
        </h2>
        <div className="section-line" />

        {/* Skill categories in cartoon cards */}
        <div
          ref={badgesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div
              key={group.label}
              className="global-card p-6 md:p-8 relative overflow-hidden"
            >
              {/* Colored top accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-[4px]"
                style={{ background: CARD_ACCENT_COLORS[groupIdx % CARD_ACCENT_COLORS.length] }}
              />

              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3
                  className="text-lg"
                  style={{
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 800,
                    color: '#1D1D1D'
                  }}
                >
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="stagger-child text-[0.85rem] px-[16px] py-[6px] cursor-default transition-all duration-200 hover:-translate-y-[1px]"
                    style={{
                      fontFamily: '"Space Grotesk", system-ui, sans-serif',
                      fontWeight: 600,
                      borderRadius: '50px',
                      background: SKILL_PILL_COLORS[(groupIdx + skillIdx) % SKILL_PILL_COLORS.length].bg,
                      color: SKILL_PILL_COLORS[(groupIdx + skillIdx) % SKILL_PILL_COLORS.length].text,
                      border: '1.5px solid #1D1D1D',
                      boxShadow: '2px 2px 0px #1D1D1D'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
