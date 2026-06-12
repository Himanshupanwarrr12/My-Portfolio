import { useInView } from '../hooks/useInView'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

/**
 * Projects — Responsive grid of project cards with rich hover effects.
 * Cartoon theme: thick borders, colorful tech pills, comic offset shadows.
 */

const PROJECTS = [
  {
    name: 'Devmatch',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'WebSockets'],
    description:
      'A real-time MERN application for live developer collaboration and matchmaking. Features WebSocket communication, JWT auth with role-based access control, and a fully responsive UI deployed with CI/CD pipeline setup.',
    github: 'https://github.com/Himanshupanwarrr12/DevMatch',
    demo: null,
  },
  {
    name: 'FluxRide',
    stack: ['Node.js', 'TypeScript', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    description:
      'An event-driven microservices ride-sharing backend with 6 decoupled services communicating via Kafka, Redis distributed locking, real-time geospatial driver matching, JWT auth, and full Docker Compose orchestration.',
    github: 'https://github.com/Himanshupanwarrr12/FluxRide',
    demo: null,
  },
]

const PILL_COLORS = [
  { bg: '#FFD166', text: '#1D1D1D' },
  { bg: '#2EC4B6', text: '#1D1D1D' },
  { bg: '#FF6B8A', text: '#1D1D1D' },
  { bg: '#E63946', text: '#fff' },
  { bg: '#FFD166', text: '#1D1D1D' },
  { bg: '#2EC4B6', text: '#1D1D1D' },
]

const PROJECT_ACCENTS = ['#E63946', '#2EC4B6']

export default function Projects() {
  const [ref, isVisible] = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--dt-bg-secondary)', transition: 'background-color 0.4s ease' }}>
      {/* Background decorations */}
      <div className="orb orb-1 top-[20%] -right-32 opacity-40" />
      <div className="orb orb-2 bottom-[10%] -left-24 opacity-30" />
      <div className="absolute top-0 left-0 w-full h-[2.5px]" style={{ background: 'var(--dt-border)' }} />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <h2 className="section-title">
          Projects
        </h2>
        <div className="section-line" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <article
              key={project.name}
              className="group relative global-card p-8 md:p-10 flex flex-col"
            >
              <div className="relative z-10 flex flex-col flex-1">
                {/* Project number tag */}
                <span
                  className="absolute -top-2 -right-1 select-none pointer-events-none"
                  style={{
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontSize: '4rem',
                    fontWeight: 900,
                    color: PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length],
                    opacity: 0.15
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Project name */}
                <h3
                  className="text-2xl md:text-[1.65rem] mb-4"
                  style={{
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 800,
                    color: 'var(--dt-text-primary)'
                  }}
                >
                  {project.name}
                </h3>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className="text-[0.72rem] font-semibold px-3 py-1.5 rounded-full tracking-wide transition-all duration-300 hover:-translate-y-[1px]"
                      style={{
                        background: PILL_COLORS[techIdx % PILL_COLORS.length].bg,
                        color: PILL_COLORS[techIdx % PILL_COLORS.length].text,
                        border: '1.5px solid var(--dt-border)',
                        boxShadow: '2px 2px 0px var(--dt-shadow)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm leading-[1.8] flex-1 mb-7" style={{ color: 'var(--dt-text-secondary)', fontWeight: 400 }}>
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wide transition-all duration-300 hover:-translate-y-[2px]"
                    aria-label={`${project.name} GitHub`}
                    style={{
                      borderRadius: '50px',
                      background: 'var(--dt-card-bg)',
                      color: 'var(--dt-text-primary)',
                      fontWeight: 700,
                      border: '2px solid var(--dt-border)',
                      boxShadow: '3px 3px 0px var(--dt-shadow)'
                    }}
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wide transition-all duration-300 hover:-translate-y-[2px]"
                      aria-label={`${project.name} Live Demo`}
                      style={{
                        borderRadius: '50px',
                        background: '#E63946',
                        color: '#fff',
                        fontWeight: 700,
                        border: '2px solid var(--dt-border)',
                        boxShadow: '3px 3px 0px var(--dt-shadow)'
                      }}
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
