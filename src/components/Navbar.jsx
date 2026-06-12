import { useState, useEffect } from 'react'

/**
 * Navbar — Fixed top navigation with scroll-aware styling.
 * - "HP" monogram on left — cartoon badge style
 * - Section links on right (desktop) / hamburger drawer (mobile)
 * - Active section highlighted via IntersectionObserver
 */

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* --- Scroll listener: toggle navbar bg --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* --- IntersectionObserver: track active section --- */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* --- Close menu on link click --- */
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-[0_4px_0px_#1D1D1D]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: '#FDF6EC', borderBottom: '2.5px solid #1D1D1D' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* --- Monogram Badge --- */}
        <a
          href="#hero"
          className="hover:-translate-y-[2px] transition-transform duration-300"
          style={{
            background: '#FFD166',
            border: '2.5px solid #1D1D1D',
            borderRadius: '12px',
            padding: '6px 14px',
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 800,
            color: '#1D1D1D',
            fontSize: '1.15rem',
            boxShadow: '3px 3px 0px #1D1D1D',
            letterSpacing: '0.02em'
          }}
        >
          HP
        </a>

        {/* --- Desktop Links --- */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className={`relative text-[0.85rem] uppercase tracking-[0.06em] transition-colors duration-300 pb-1 ${
                  activeSection === href.slice(1)
                    ? 'text-[#E63946]'
                    : 'text-[#1D1D1D] hover:text-[#E63946]'
                }`}
                style={{ fontFamily: '"Outfit", system-ui, sans-serif', fontWeight: 700 }}
              >
                {label}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-[#E63946] transition-all duration-300 rounded-full ${
                    activeSection === href.slice(1) ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* --- Hamburger Button (mobile) --- */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-1 z-[60]"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
            style={{ background: '#1D1D1D' }}
          />
          <span
            className={`block w-6 h-[2.5px] rounded-full transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ background: '#1D1D1D' }}
          />
          <span
            className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
            style={{ background: '#1D1D1D' }}
          />
        </button>
      </div>

      {/* --- Mobile Drawer --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: '#FDF6EC', borderTop: '2px solid #1D1D1D' }}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className={`text-xl transition-colors duration-300 ${
                  activeSection === href.slice(1)
                    ? 'text-[#E63946]'
                    : 'text-[#1D1D1D] hover:text-[#E63946]'
                }`}
                style={{ fontFamily: '"Outfit", system-ui, sans-serif', fontWeight: 700 }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
