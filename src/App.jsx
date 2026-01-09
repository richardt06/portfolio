import { useState } from 'react'
import './App.css'
import portraitImage from './assets/portrait.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>Richard Tang</div>
        <nav className="nav">
          <a href="#home" onClick={() => setActiveSection('home')}>HOME</a>
          <a href="#projects" onClick={() => setActiveSection('projects')}>PROJECTS</a>
          <a href="#about" onClick={() => setActiveSection('about')}>ABOUT</a>
          <a href="#experience" onClick={() => setActiveSection('experience')}>EXPERIENCE</a>
          <a href="#contact" onClick={() => setActiveSection('contact')}>CONTACT</a>
        </nav>
        <button className="contact-btn" onClick={() => setActiveSection('contact')}>CONTACT ME</button>
      </header>

      <main className="main-content">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="home-section">
      <div className="content-left">
        <h1 className="main-title">
          <span>Electrical</span>
          <span>Engineer</span>
        </h1>
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
      </div>
      <div className="content-right">
        <div className="portrait-container">
          <img src={portraitImage} alt="Richard Tang" className="portrait-image" />
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <div className="section">
      <h2>PROJECTS</h2>
      <div className="project-card">
        <h3>Accumulated Cyclone Energy | Java</h3>
        <p className="project-date">Oct 2023 - Apr 2024</p>
        <ul>
          <li>Developed and implemented the ACE (Accumulated Cyclone Energy) model for analyzing tropical cyclone data</li>
          <li>Created visualizations of complex meteorological data to identify patterns and trends</li>
          <li>Partnered with the Media team to communicate findings and technical concepts effectively</li>
        </ul>
      </div>
      <div className="project-card">
        <h3>Custom PCB Alarm Clock</h3>
        <p className="project-date">Aug 2025 - Present (In Progress)</p>
        <ul>
          <li>Developing circuit schematics and layout using KiCad for a custom printed circuit board</li>
          <li>Programming firmware in C for alarm clock functionality and user interface</li>
          <li>Integrating hardware components with embedded software for a complete system solution</li>
        </ul>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="section">
      <h2>ABOUT</h2>
      <div className="about-content">
        <div className="education-card">
          <h3>EDUCATION</h3>
          <div className="education-item">
            <h4>University of Central Florida</h4>
            <p>Bachelor of Science in Electrical Engineering</p>
            <p>Minor in Computer Science and Applied Mathematics</p>
            <p className="location">Orlando, FL</p>
            <p className="date">Aug 2024 - Present</p>
          </div>
        </div>
        <div className="skills-card">
          <h3>TECHNICAL SKILLS</h3>
          <div className="skills-grid">
            <div>
              <h4>Languages</h4>
              <p>Java, C, JavaScript, HTML/CSS</p>
            </div>
            <div>
              <h4>Design Tools</h4>
              <p>AutoCAD, Revit, KiCad</p>
            </div>
          </div>
        </div>
        <div className="involvement-card">
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
    <div className="section">
      <h2>EXPERIENCE</h2>
      <div className="experience-card">
        <h3>Space Launch Delta 45</h3>
        <p className="role">Remote Research Assistant / Meteorological Data Analyst</p>
        <p className="location">Orlando, FL</p>
        <p className="date">Nov 2022 - Apr 2024</p>
        <ul>
          <li>Conducted research and statistical analysis using radiosonde technology to collect atmospheric data</li>
          <li>Investigated and analyzed dew point variations to understand meteorological patterns</li>
          <li>Presented research findings at the 104th Annual American Meteorological Society National Conference</li>
        </ul>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="section">
      <h2>CONTACT</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <strong>Phone:</strong>
            <a href="tel:617-415-8726">617-415-8726</a>
          </div>
          <div className="contact-item">
            <strong>Email:</strong>
            <a href="mailto:richardtng25@gmail.com">richardtng25@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/richard-tang-803163320" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/richard-tang-803163320</a>
          </div>
          <div className="contact-item">
            <strong>GitHub:</strong>
            <a href="https://github.com/richardt06" target="_blank" rel="noopener noreferrer">github.com/richardt06</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
