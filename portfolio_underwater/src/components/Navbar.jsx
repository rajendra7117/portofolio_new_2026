import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleToggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="topbar">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Go to home section">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 42" role="img" aria-hidden="true">
              <path d="M4 20C10 14 16 12 22 14C26 15 30 18 34 16C39 13 45 8 52 8C56 8 60 10 60 13C57 19 52 22 44 23C38 24 33 27 28 30C22 33 15 34 10 30C6 27 5 24 4 20Z" />
              <path d="M14 28C18 25 22 24 27 24C32 23 37 25 40 27" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Rajendra</strong>
            <small>Portfolio</small>
          </span>
        </a>

        <div className={`nav-panel ${mobileOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? 'is-active' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={handleToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            <span className="theme-label">{theme === 'dark' ? 'Ocean Dark' : 'Ocean Light'}</span>
          </button>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
