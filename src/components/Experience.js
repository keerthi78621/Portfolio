import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey so far</p>
      </div>
      
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-6V4h6v2z"/>
              </svg>
            </div>
            <div className="experience-info">
              <h3 className="experience-role">Associate Software Developer</h3>
              <h4 className="experience-company">Kaleido Global Fintech Solutions Private Limited</h4>
              <p className="experience-date">August 2026 – Present</p>
            </div>
          </div>
          <div className="experience-badge current-role">Current Role</div>
          <div className="experience-body">
            <p>
              Currently beginning my professional journey as a Software Development Trainee, 
              gaining practical exposure to software development workflows and applying my 
              Java full-stack development knowledge in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
