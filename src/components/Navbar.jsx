import { useState, useEffect } from 'react'
import { useTheme } from '../hooks/useTheme'
import { FiMoon, FiSun } from 'react-icons/fi'

/**
 * Navbar — Fixed top navigation with scroll-aware styling.
 * - "HP" monogram on left — cartoon badge style
 * - Section links on right (desktop) / hamburger drawer (mobile)
 * - Active section highlighted via IntersectionObserver
 * - Dark/Light mode toggle button
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
  const { isDark, toggleTheme } = useTheme()

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
          ? 'shadow-[0_4px_0px_var(--dt-shadow)]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'var(--dt-bg-primary)', borderBottom: '2.5px solid var(--dt-border)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        {/* --- Monogram Badge --- */}
        <a
          href="#hero"
          className="hover:-translate-y-[2px] transition-transform duration-300"
          style={{
            background: '#FFD166',
            border: '2.5px solid var(--dt-border)',
            borderRadius: '12px',
            padding: '6px 14px',
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 800,
            color: '#1D1D1D',
            fontSize: '1.15rem',
            boxShadow: '3px 3px 0px var(--dt-shadow)',
            letterSpacing: '0.02em'
          }}
        >
          HP
        </a>

        {/* --- Desktop Links + Toggle --- */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleLinkClick}
                  className={`relative text-[0.85rem] uppercase tracking-[0.06em] transition-colors duration-300 pb-1`}
                  style={{
                    fontFamily: '"Outfit", system-ui, sans-serif',
                    fontWeight: 700,
                    color: activeSection === href.slice(1) ? '#E63946' : 'var(--dt-text-primary)'
                  }}
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
          >
            <span style={{ transition: 'transform 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)' }}>
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </span>
          </button>
        </div>

        {/* --- Mobile: Toggle + Hamburger --- */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle (mobile) */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{ width: '36px', height: '36px', fontSize: '1rem' }}
            aria-label="Toggle dark mode"
          >
            <span style={{ transition: 'transform 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isDark ? 'rotate(360deg)' : 'rotate(0deg)' }}>
              {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </span>
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-1 z-[60]"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
              style={{ background: 'var(--dt-text-primary)' }}
            />
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ background: 'var(--dt-text-primary)' }}
            />
            <span
              className={`block w-6 h-[2.5px] rounded-full transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
              style={{ background: 'var(--dt-text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* --- Mobile Drawer --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'var(--dt-bg-primary)', borderTop: '2px solid var(--dt-border)' }}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="text-xl transition-colors duration-300"
                style={{
                  fontFamily: '"Outfit", system-ui, sans-serif',
                  fontWeight: 700,
                  color: activeSection === href.slice(1) ? '#E63946' : 'var(--dt-text-primary)'
                }}
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
