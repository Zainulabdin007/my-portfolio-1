import React from 'react'
import uwLogo from '../assets/logo of waterloo.png'
import './ExperienceSection.css'

export default function ExperienceSection() {
  const education = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Mathematics',
      company: 'University of Waterloo',
      location: 'Waterloo, ON',
      period: 'Incoming / Present',
      description: [
        'Planning to major in Data Science',
        'Learning computer science, mathematics, and data analysis',
        'Excited to start my journey in advanced studies',
      ],
      technologies: ['Python', 'Java', 'Mathematics', 'Data Science'],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Work & Education</h2>
          <p className="section-subtitle">
            Building my experience and learning every day.
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-section-group">
            <h3 className="experience-group-title">💼 Work Experience</h3>
            <div className="coming-soon-container">
              <div className="coming-soon-box">
                <div className="coming-soon-icon">💼</div>
                <h3>Coming Soon</h3>
                <p>work in progress, check back soon!</p>
              </div>
            </div>
          </div>

          <div className="experience-section-group">
            <h3 className="experience-group-title">🎓 Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot education"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-card">
                      <div className="timeline-header">
                        <div className="timeline-header-content">
                          <div className="timeline-logo">
                            <img src={uwLogo} alt="University of Waterloo" className="university-logo" />
                          </div>
                          <div>
                            <h3>{edu.title}</h3>
                            <p className="company">{edu.company} • {edu.location}</p>
                          </div>
                        </div>
                        <span className="period">{edu.period}</span>
                      </div>
                      <ul className="timeline-description">
                        {edu.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <div className="timeline-technologies">
                        {edu.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
