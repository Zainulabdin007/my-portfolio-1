import React from 'react'
import './SkillsSection.css'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 30 },
        { name: 'JavaScript', level: 50 },
        { name: 'HTML/CSS', level: 50 },
        { name: 'TypeScript', level: 50 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 10 },
        { name: 'Java', level: 25 },
        { name: 'Fast API', level: 5 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 70 },
      ],
    },
  ]

  const technologies = [
    'React', 'JavaScript', 'HTML/CSS', 'TypeScript',
    'Python', 'Java', 'Fast API',
    'Git', 'Racket'
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            Continuously learning new tools to deliver the best solutions.
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="technologies-grid">
          <h3>All Technologies</h3>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
