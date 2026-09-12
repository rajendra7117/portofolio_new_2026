import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, GitBranch, Globe, Mail, X } from 'lucide-react'
import Navbar from './components/Navbar'
import Bubbles from './components/underwater/Bubbles'
import FishSchool from './components/underwater/FishSchool'
import LightRays from './components/underwater/LightRays'
import SeaTurtle from './components/underwater/SeaTurtle'
import Seabed from './components/underwater/Seabed'
import OceanWave from './components/underwater/OceanWave'
import clownFish from './assets/clown-fish.png'
import fishSmall from './assets/fish-small.svg'
import jellyfish from './assets/jellyfish.svg'
import crab1 from './assets/crab1.svg'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { experience } from './data/experience'
import './App.css'

function SkillLogo({ kind }) {
  const commonProps = {
    width: 36,
    height: 36,
    viewBox: '0 0 36 36',
    role: 'img',
    'aria-hidden': 'true',
  }

  switch (kind) {
    case 'react':
      return (
        <svg {...commonProps}>
          <circle cx="18" cy="18" r="3.35" fill="#61dafb"/>
          <ellipse cx="18" cy="18" rx="13.2" ry="5.2" fill="none" stroke="#61dafb" strokeWidth="2.4" transform="rotate(0 18 18)"/>
          <ellipse cx="18" cy="18" rx="13.2" ry="5.2" fill="none" stroke="#61dafb" strokeWidth="2.4" transform="rotate(60 18 18)"/>
          <ellipse cx="18" cy="18" rx="13.2" ry="5.2" fill="none" stroke="#61dafb" strokeWidth="2.4" transform="rotate(120 18 18)"/>
        </svg>
      )
    case 'javascript':
      return (
        <svg {...commonProps}>
          <path d="M8 9h20v18H8z" fill="#f7df1e"/>
          <path d="M14 14h8v2.2h-3.8v8.2H17v-8.2H14z" fill="#1f1f1f" fillOpacity="0.75"/>
        </svg>
      )
    case 'html':
      return (
        <svg {...commonProps}>
          <path d="M8 8h20l-1.8 20.2L18 30l-8.2-1.8L8 8z" fill="#e44d26"/>
          <path d="M13 13.5h11.5l-.6 7.1L18 22l-5.8-1.4-.4-4.6h3l.2 2.1 3.1.8 3.1-.8.3-3.2H13.5l-.4-4.8h9.6l-.2-2.1H13z" fill="#fff"/>
        </svg>
      )
    case 'css':
      return (
        <svg {...commonProps}>
          <path d="M8 8h20l-1.8 20.1L18 30l-8.2-1.9L8 8z" fill="#1d73b7"/>
          <path d="M14 13.5h10.2l-.5 5.4H16l.2 2.4 3.8.9 3.8-.9.4-4.1H15l-.2-2.9h8.6l.2-2.8H14z" fill="#fff"/>
        </svg>
      )
    case 'bootstrap':
      return (
        <svg {...commonProps}>
          <path d="M7 10.5C7 8.6 8.6 7 10.5 7h15c1.9 0 3.5 1.6 3.5 3.5v15c0 1.9-1.6 3.5-3.5 3.5h-15C8.6 29 7 27.4 7 25.5v-15z" fill="#7a1cf2"/>
          <path d="M13 13h6.2c3.6 0 5.8 1.8 5.8 4.7 0 2.2-1.3 3.7-3.5 4.4l3.9 5.6h-4.1l-3.4-4.9H16v4.9h-3V13zm3 2.8v4.2h3c2.3 0 3.3-.9 3.3-2.1 0-1.3-1.1-2.1-3.4-2.1H16z" fill="#fff"/>
        </svg>
      )
    case 'python':
      return (
        <svg {...commonProps}>
          <path d="M14 7h8v6h-8zm0 16h8v6h-8z" fill="#3776ab"/>
          <path d="M12 9c-3 0-4 2-4 4v4c0 2 1 4 4 4h2v-6h8v6h2c3 0 4-2 4-4v-4c0-2-1-4-4-4h-2v6h-8v-6h-2z" fill="#ffd43b"/>
          <path d="M15 18h6v6h-6z" fill="#3776ab" fillOpacity="0.9"/>
        </svg>
      )
    case 'redux':
      return (
        <svg {...commonProps}>
          <path d="M18 8c-5.5 0-9.2 3.3-9.2 8.1 0 2.4 1.5 4.5 4 5.7.8.4 1.5.7 2.2 1.1.8.4 1.2 1.2 1.2 2.1v1.2h4.4v-1.4c0-1.1.5-2 1.3-2.5 2.5-1.5 4-3.7 4-6.2C27.9 11.8 24.1 8 18 8zm-4.7 8.7c0-1.1 1.2-1.9 3.1-1.9s3.1.8 3.1 1.9-1.1 1.9-3.1 1.9-3.1-.8-3.1-1.9zm8.5 1.8c1.5 0 2.5.5 2.5 1.4 0 1.4-1.8 2.1-4.6 2.1-2.8 0-4.6-.7-4.6-2.1 0-.9 1-1.4 2.6-1.4h4.1z" fill="#764abc"/>
        </svg>
      )
    case 'vue':
      return (
        <svg {...commonProps}>
          <path d="M22.5 8L18 18l-4.5-10H7l11 20 11-20h-6.5z" fill="#41b883"/>
          <path d="M22.5 8L18 18l-4.5-10H12l6 11 6-11h-3.5z" fill="#35495e" fillOpacity="0.9"/>
        </svg>
      )
    case 'aem':
      return (
        <svg {...commonProps}>
          <path d="M9 24.5V11.5L18 7l9 4.5v13L18 29l-9-4.5z" fill="#f97316" opacity="0.18"/>
          <path d="M18 8.5l-8 4v11l8 4 8-4v-11l-8-4zm0 2.6l5.5 2.7-5.5 2.7-5.5-2.7L18 11.1zm-6 4.5l5 2.5v6.1l-5-2.5v-6.1zm12 0v6.1l-5 2.5v-6.1l5-2.5z" fill="#f97316"/>
        </svg>
      )
    case 'node':
      return (
        <svg {...commonProps}>
          <path d="M18 7.5L9 12.8v10.4l9 5.3 9-5.3V12.8L18 7.5zm0 3.5l5.5 3.2-5.5 3.2-5.5-3.2L18 11zm-6.5 4.7l5 2.9v6.1l-5-2.9v-6.1zm13 0v6.1l-5 2.9v-6.1l5-2.9z" fill="#68a063"/>
          <circle cx="18" cy="18" r="2.2" fill="#1f2d2a"/>
        </svg>
      )
    case 'mongodb':
      return (
        <svg {...commonProps}>
          <path d="M18 7c1.8 0 3.3 1.4 3.3 3.2v10.8c0 2.2-1.5 4-3.3 4s-3.3-1.8-3.3-4V10.2C14.7 8.4 16.2 7 18 7z" fill="#13aa52" opacity="0.2"/>
          <path d="M18 7c-1.8 0-3.3 1.4-3.3 3.2v10.8c0 2.2 1.5 4 3.3 4s3.3-1.8 3.3-4V10.2C21.3 8.4 19.8 7 18 7zm0 2.7c.9 0 1.6.7 1.6 1.5v9.3c0 1.1-.7 2-1.6 2s-1.6-.9-1.6-2v-9.3c0-.8.7-1.5 1.6-1.5zm-1.7 8.4h3.4v2.2h-3.4v-2.2z" fill="#13aa52"/>
          <path d="M18 8.8c1.1 0 2 .8 2 1.8v1.2h-4v-1.2c0-1 .9-1.8 2-1.8z" fill="#7ae3a0"/>
        </svg>
      )
    case 'java':
      return (
        <svg {...commonProps}>
          <path d="M10 10h16v11.5c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4V10z" fill="#f89820" opacity="0.18"/>
          <path d="M10 11h12c1.7 0 3 1.3 3 3v1.4c0 1.5-1.2 2.7-2.7 2.7H14.8c-1.6 0-2.8 1.2-2.8 2.8V24h-2.2c-2.1 0-3.8-1.7-3.8-3.8V14c0-1.7 1.3-3 3-3h2.2z" fill="#f89820"/>
          <path d="M22 12.4h-9.8c1.5 0 2.8 1.1 2.8 2.6v4.7h7c1.9 0 3.4-1.5 3.4-3.4v-1.6c0-1.5-1.2-2.3-3.4-2.3z" fill="#fff" opacity="0.9"/>
          <path d="M12 9.5c0-1.8 1.7-3.3 3.8-3.3h3.4c2.1 0 3.8 1.5 3.8 3.3v1.2H12v-1.2z" fill="#f89820"/>
        </svg>
      )
    case 'react-native':
      return (
        <svg {...commonProps}>
          <rect x="10" y="4" width="16" height="28" rx="4" fill="#61dafb" fillOpacity="0.28" stroke="#61dafb" strokeWidth="1.8"/>
          <circle cx="18" cy="18" r="3.4" fill="#61dafb"/>
          <ellipse cx="18" cy="18" rx="10" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.8"/>
          <path d="M18 8v20M10 12l16 12M26 12L10 24" stroke="#61dafb" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    default:
      return null
  }
}

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('rajendra-theme')
    return stored || 'dark'
  })
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('rajendra-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!isResumeOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isResumeOpen])

  const contactLinks = useMemo(
    () => [
      {
        label: 'Email',
        value: 'rajendrabvm007@gmail.com',
        href: 'mailto:rajendrabvm007@gmail.com',
        icon: Mail,
      },
      {
        label: 'LinkedIn',
        value: '@rajendra-surada',
        href: 'https://www.linkedin.com/in/rajendra-surada',
        icon: Globe,
      },
      {
        label: 'GitHub',
        value: '@rajendra7117',
        href: 'https://github.com/rajendra7117',
        icon: GitBranch,
      },
    ],
    [],
  )

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content shell">
            <div className="hero-copy">
              <p className="eyebrow">HELLO THERE</p>
              <h1>
                Hi, I&apos;m <span>Rajendra</span>
              </h1>
              <p className="subtitle">AEM Frontend Developer</p>
              <p className="intro">
                Software Engineer with 5+ years of experience in Adobe Experience Manager (AEM), Vue.js,
                React.js, and modern front-end engineering, building scalable enterprise web experiences
                for customer-facing digital platforms.
              </p>

              <div className="cta-row">
                <button type="button" className="primary-btn" onClick={() => setIsResumeOpen(true)}>
                  Get My Resume
                  <ArrowRight size={16} />
                </button>
                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hero-art">
              <div className="hero-quote">Code. Explore. Create.</div>
              <SeaTurtle />
              <FishSchool />
              <Bubbles count={12} className="hero-bubbles" />
              <LightRays />
            </div>
          </div>
          <Seabed />
          <OceanWave variant="dark-to-light" className="hero-wave" />
        </section>

        <section id="projects" className="content-section section-projects">
          <div className="shell section-heading-wrap">
            <div className="section-heading">
              <p className="eyebrow">FEATURED WORK</p>
              <h2>My Projects</h2>
              <p>Some of the projects I&apos;ve worked on.</p>
            </div>
          </div>

          <div className="projects-fish-scene" aria-hidden="true">
            <img src={clownFish} alt="" className="project-fish project-fish--clown project-fish--one" />
            <img src={fishSmall} alt="" className="project-fish project-fish--small project-fish--two" />
            <img src={clownFish} alt="" className="project-fish project-fish--clown project-fish--three" />
            <img src={fishSmall} alt="" className="project-fish project-fish--small project-fish--four" />
          </div>

          <div className="shell projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                  <span className="project-badge">{project.technologies[0]}</span>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {project.technologies.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.liveUrl} className="primary-btn small-btn" target="_blank" rel="noreferrer">
                      Live Site
                    </a>
                    <a href={project.githubUrl} className="secondary-btn small-btn" target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <OceanWave variant="dark-to-light" className="projects-wave" />
        </section>

        <section id="skills" className="content-section section-skills">
          <div className="skills-background" aria-hidden="true">
            <img src={jellyfish} alt="" className="skills-jellyfish" />
            <div className="skills-bubble bubble-one" />
            <div className="skills-bubble bubble-two" />
            <div className="skills-bubble bubble-three" />
            <div className="skills-bubble bubble-four" />
            <div className="skills-bubble bubble-five" />
            <div className="skills-bubble bubble-six" />
            <div className="skills-seaweed skills-seaweed-left" />
            <div className="skills-seaweed skills-seaweed-right" />
            <div className="skills-coral skills-coral-left" />
            <div className="skills-coral skills-coral-right" />
          </div>

          <div className="shell skills-content">
            <div className="skills-heading">
              <p className="eyebrow">WHAT I WORK WITH</p>
              <h2>My Skills</h2>
              <p>Technologies and tools I use to bring ideas to life</p>
            </div>

            <div className="skills-showcase">
              <div className="skills-column skills-column-left">
                {skills
                  .filter((skill) => skill.side === 'left')
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-pill skill-pill-left"
                      whileHover={{
                        y: -8,
                        rotateX: 8,
                        rotateY: -10,
                        scale: 1.02,
                        transition: { type: 'spring', stiffness: 200, damping: 18 },
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="skill-copy">
                        <h3>{skill.name}</h3>
                        <small>{skill.description}</small>
                      </div>
                      <div className="skill-icon" aria-hidden="true">
                        <SkillLogo kind={skill.kind} />
                      </div>
                    </motion.div>
                  ))}
              </div>

              <div className="skills-core" aria-label="Developer skill center">
                <div className="skills-core-glow" />
                <div className="skills-core-orb">
                  <div className="skills-orb-message">
                    <span>Build</span>
                    <span>Explore</span>
                    <span>Improve</span>
                    <span>Repeat</span>
                  </div>
                  <div className="skills-octopus" aria-hidden="true">
                    <div className="octopus-head">
                      <span className="eye left" />
                      <span className="eye right" />
                      <span className="smile" />
                    </div>
                    <div className="octopus-body">
                      <span className="arm arm-one" />
                      <span className="arm arm-two" />
                      <span className="arm arm-three" />
                      <span className="arm arm-four" />
                    </div>
                    <div className="laptop">
                      <span className="screen"><span>&lt;/&gt;</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-column skills-column-right">
                {skills
                  .filter((skill) => skill.side === 'right')
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skill-pill skill-pill-right"
                      whileHover={{
                        y: -8,
                        rotateX: 8,
                        rotateY: 10,
                        scale: 1.02,
                        transition: { type: 'spring', stiffness: 200, damping: 18 },
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="skill-icon" aria-hidden="true">
                        <SkillLogo kind={skill.kind} />
                      </div>
                      <div className="skill-copy">
                        <h3>{skill.name}</h3>
                        <small>{skill.description}</small>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            <svg className="skills-connectors" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 250 170 C 330 145, 430 150, 500 220" />
              <path d="M 245 330 C 335 310, 430 300, 500 306" />
              <path d="M 260 500 C 335 520, 420 565, 500 470" />
              <path d="M 260 650 C 330 640, 430 615, 500 528" />
              <path d="M 950 170 C 870 145, 770 150, 700 220" />
              <path d="M 955 330 C 875 310, 780 300, 700 306" />
              <path d="M 940 500 C 865 520, 780 565, 700 470" />
              <path d="M 940 650 C 870 640, 780 615, 700 528" />
              <circle cx="500" cy="220" r="5" />
              <circle cx="500" cy="306" r="5" />
              <circle cx="500" cy="470" r="5" />
              <circle cx="500" cy="528" r="5" />
            </svg>
          </div>

          <OceanWave variant="light-to-dark" className="experience-wave" />
        </section>

        <section id="experience" className="content-section section-experience">
          <div className="shell section-heading-wrap">
            <div className="section-heading">
              <p className="eyebrow">PROFESSIONAL JOURNEY</p>
              <h2>Experience</h2>
            </div>
          </div>

          <div className="shell timeline">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <p className="timeline-company">{item.company}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <span className="timeline-dates">{item.dates}</span>
                  </div>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section section-contact">
          <div className="shell contact-wrap">
            <div className="section-heading narrow-heading">
              <p className="eyebrow">LET&apos;S CONNECT</p>
              <h2>Get In Touch</h2>
              <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
            </div>

            <div className="contact-grid">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} className="contact-card" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <div className="contact-icon"><Icon size={18} /></div>
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>
      </main>

      {isResumeOpen && (
        <div className="resume-overlay" onClick={() => setIsResumeOpen(false)} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <div className="resume-modal" onClick={(event) => event.stopPropagation()}>
            <div className="resume-modal-header">
              <div>
                <p className="eyebrow resume-eyebrow">RESUME PREVIEW</p>
                <h3 id="resume-modal-title">Rajendra Surada</h3>
              </div>
              <button type="button" className="resume-close" aria-label="Close resume preview" onClick={() => setIsResumeOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <iframe
              title="Rajendra Surada Resume"
              src="/Rajendra__Resume.pdf"
              className="resume-frame"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <footer className="site-footer">
        <motion.div
          className="footer-crab-wrap"
          aria-hidden="true"
          initial={{ x: '100vw' }}
          animate={{ x: '-100vw' }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img src={crab1} alt="" className="footer-crab" />
        </motion.div>
        <div className="shell footer-inner">
          <div>
            <p className="footer-title">Made with ❤️ by Rajendra</p>
            <p>Keep Exploring. Keep Building.</p>
          </div>
          <div className="footer-meta">
            <a href="https://github.com/rajendra" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/rajendra" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:rajendra@example.com">Email</a>
          </div>
        </div>
        <button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </footer>
    </>
  )
}

export default App
