import React from 'react'
import './SocialSection.css'

export default function SocialSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/zain-bughio-869586367/',
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Zainulabdin007',
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/zainulabdin_bughio?igsh=MWc1bjU3Y2dtOGZnYw%3D%3D&utm_source=qr',
    },
  ]

  return (
    <section id="contact" className="social-section">
      <div className="social-container">
        <div className="social-header">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Feel free to reach out and connect with me on social media.
          </p>
        </div>

        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <div className="social-icon">{social.icon}</div>
              <h3>{social.name}</h3>
              <p>Visit my {social.name} profile</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

