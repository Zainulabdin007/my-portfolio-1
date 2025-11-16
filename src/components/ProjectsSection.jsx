import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ProjectsSection.css'

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Working on some exciting projects. Stay tuned!
          </p>
        </div>

        <div className="coming-soon-container">
          <div className="coming-soon-box">
            <div className="coming-soon-icon">🚀</div>
            <h3>Coming Soon</h3>
            <p>work in progress, check back soon!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
