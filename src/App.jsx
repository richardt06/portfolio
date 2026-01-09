import { useState, useEffect } from 'react'
import './App.css'
import portraitImage from './assets/portrait.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Smooth scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeSection])

  return (
    <div className="app">
      <header className={`header ${activeSection !== 'home' ? 'header-scrolled' : ''}`}>
        <div className="logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-text">RT</span>
          <span className="logo-full">Richard Tang</span>
        </div>
        <nav className="nav">
          <a 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            HOME
          </a>
          <a 
            href="#projects" 
            onClick={() => setActiveSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            PROJECTS
          </a>
          <a 
            href="#about" 
            onClick={() => setActiveSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            ABOUT
          </a>
          <a 
            href="#experience" 
            onClick={() => setActiveSection('experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            EXPERIENCE
          </a>
        </nav>
        <button className="contact-btn" onClick={() => setActiveSection('contact')}>
          CONTACT ME
        </button>
      </header>

      <main className="main-content">
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  )
}

function HomeSection({ setActiveSection }) {
  return (
    <div className="home-section">
      <div className="home-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>
      <div className="home-content">
        <div className="content-left">
          <div className="greeting">Hello, I'm</div>
          <h1 className="main-title">
            <span className="title-line">Richard</span>
            <span className="title-line highlight">Tang</span>
          </h1>
          <div className="title-subtitle">Electrical Engineer</div>
          <div className="tags">
            <div className="tag">
              <span className="tag-dot"></span>
              <span>HARDWARE</span>
            </div>
            <div className="tag">
              <span className="tag-dot"></span>
              <span>SOFTWARE</span>
            </div>
          </div>
          <p className="description">
            Electrical Engineering student at the University of Central Florida and aspiring engineer. 
            Passionate about developing innovative solutions through hardware and software integration.
          </p>
          <div className="home-actions">
            <button className="btn-primary" onClick={() => setActiveSection('projects')}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => setActiveSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="content-right">
          <div className="portrait-wrapper">
            <div className="portrait-frame">
              <img src={portraitImage} alt="Richard Tang" className="portrait-image" />
              <div className="portrait-overlay"></div>
            </div>
            <div className="portrait-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "Accumulated Cyclone Energy",
      tech: "Java",
      date: "Oct 2023 - Apr 2024",
      description: "Developed and implemented the ACE model for analyzing tropical cyclone data with advanced visualizations.",
      points: [
        "Developed and implemented the ACE (Accumulated Cyclone Energy) model for analyzing tropical cyclone data",
        "Created visualizations of complex meteorological data to identify patterns and trends",
        "Partnered with the Media team to communicate findings and technical concepts effectively"
      ]
    },
    {
      title: "Custom PCB Alarm Clock",
      tech: "C · KiCad",
      date: "Aug 2025 - Present",
      description: "Building a custom printed circuit board alarm clock with embedded firmware.",
      points: [
        "Developing circuit schematics and layout using KiCad for a custom printed circuit board",
        "Programming firmware in C for alarm clock functionality and user interface",
        "Integrating hardware components with embedded software for a complete system solution"
      ],
      inProgress: true
    }
  ]

  return (
    <div className="section projects-section">
      <div className="section-header">
        <span className="section-number">01</span>
        <h2>PROJECTS</h2>
        <p className="section-subtitle">A showcase of my recent work and side projects</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.inProgress ? 'in-progress' : ''}`}>
            <div className="project-header">
              <div>
                <h3>{project.title}</h3>
                <div className="project-tech">{project.tech}</div>
              </div>
              {project.inProgress && <span className="project-badge">In Progress</span>}
            </div>
            <p className="project-date">{project.date}</p>
            <p className="project-description">{project.description}</p>
            <ul className="project-list">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-footer"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutSection() {
  const skills = {
    languages: ["Java", "C", "JavaScript", "HTML/CSS"],
    tools: ["AutoCAD", "Revit", "KiCad"]
  }

  return (
    <div className="section about-section">
      <div className="section-header">
        <span className="section-number">02</span>
        <h2>ABOUT</h2>
        <p className="section-subtitle">My journey, skills, and involvement</p>
      </div>
      
      <div className="about-grid">
        <div className="about-card education-card">
          <h3>EDUCATION</h3>
          <div className="education-item">
            <h4>University of Central Florida</h4>
            <p className="degree">Bachelor of Science in Electrical Engineering</p>
            <p className="minor">Minor in Computer Science and Applied Mathematics</p>
            <div className="info-row">
              <span className="location">📍 Orlando, FL</span>
              <span className="date">Aug 2024 - Present</span>
            </div>
          </div>
        </div>

        <div className="about-card skills-card">
          <h3>TECHNICAL SKILLS</h3>
          <div className="skills-content">
            <div className="skill-group">
              <h4>Languages</h4>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <h4>Design Tools</h4>
              <div className="skill-tags">
                {skills.tools.map((tool, i) => (
                  <span key={i} className="skill-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-card involvement-card">
          <h3>INVOLVEMENT</h3>
          <div className="involvement-item">
            <h4>IEEE Student Branch</h4>
            <p className="date">Sep 2025 - Present</p>
            <ul>
              <li>Attending technical workshops and professional development sessions</li>
              <li>Collaborating on CPU development projects with fellow students</li>
            </ul>
          </div>
          <div className="involvement-item">
            <h4>REACH Orlando</h4>
            <p className="date">Jan 2023 - May 2023</p>
            <ul>
              <li>Coordinated food distributions to serve the local community</li>
              <li>Authored blog posts documenting outreach events and impact</li>
              <li>Assisted with food preparation and logistics</li>
              <li>Collaborated on documenting outreach events for community awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <div className="section experience-section">
      <div className="section-header">
        <span className="section-number">03</span>
        <h2>EXPERIENCE</h2>
        <p className="section-subtitle">Professional experience and research work</p>
      </div>
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Space Launch Delta 45</h3>
              <span className="experience-badge">Remote</span>
            </div>
            <p className="role">Research Assistant / Meteorological Data Analyst</p>
            <p className="location">📍 Orlando, FL</p>
            <p className="date">Nov 2022 - Apr 2024</p>
            <ul>
              <li>Conducted research and statistical analysis using radiosonde technology to collect atmospheric data</li>
              <li>Investigated and analyzed dew point variations to understand meteorological patterns</li>
              <li>Presented research findings at the 104th Annual American Meteorological Society National Conference</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="section contact-section">
      <div className="section-header">
        <span className="section-number">04</span>
        <h2>CONTACT</h2>
        <p className="section-subtitle">Let's connect and work together</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <strong>Phone</strong>
          <a href="tel:617-415-8726">617-415-8726</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <strong>Email</strong>
          <a href="mailto:richardtng25@gmail.com">richardtng25@gmail.com</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon">💼</div>
          <strong>LinkedIn</strong>
          <a href="https://www.linkedin.com/in/richard-tang-803163320" target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
        <div className="contact-card">
          <div className="contact-icon">💻</div>
          <strong>GitHub</strong>
          <a href="https://github.com/richardt06" target="_blank" rel="noopener noreferrer">
            github.com/richardt06
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
