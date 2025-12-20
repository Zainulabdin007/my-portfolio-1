import React from 'react'
import portraitImage from '../assets/zain.png'
import './AboutSection.css'

export default function AboutSection() {
  const stats = [
    { number: '2', label: 'Projects Completed' },
    { number: '1', label: 'University year' },
    { number: '1', label: 'work experience' },
    { number: '100', label: 'excitement level' },
  ]

  const interests = [
    { icon: '💻', title: 'Web Development', desc: 'some experience with web development' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'beginner in UI/UX Design' },
    { icon: '📱', title: 'Mobile Apps', desc: 'want to learn mobile app development' },
    { icon: '🤖', title: 'Prompt engineering', desc: 'AI expert' },
    { icon: '🎮', title: 'Game Dev', desc: 'excited to learn in the future' },
    { icon: '📚', title: 'LeetCode', desc: 'Always improving skills' },
  ]

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Passionate Developer</h2>
          <p>
        
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-bio">
              <h3>Hello! I'm Zain Bughio</h3>
              <p>
                I am a math undergrad student at the University of Waterloo. I have a few simple projects under my belt and 
                i am always eager to learn and improve my skills. I am a quick learner and always looking for new challenges.
                I am always looking for new opportunities to grow and improve my skills. Currently looking for Software Engineering and Data analyst
                internships for summer 2026. 
                
              </p>
              <p>
                My journey in software development started with a curiosity about how things work.
                This curiosity has evolved into a deep passion for crafting solutions that not only
                look great but also provide exceptional user experiences. I believe in writing clean,
                maintainable code and always staying up-to-date with the latest projects and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new things, I'm always eager to learn
                and take on new challenges that push me out of my comfort zone. 
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-gradient"></div>
              <div className="about-image-placeholder">
                <img src={portraitImage} alt="Zain Bughio" className="portrait-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="about-interests">
          <h3>What I'm Interested In</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h4>{interest.title}</h4>
                <p>{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
