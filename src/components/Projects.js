import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Blockchain-Based Secure Biomedical Data Collection System',
      description: 'IEEE Project implementing SHA-256 hashing, face recognition authentication, and NoSQL storage for secure medical data. Handled complete project lifecycle independently.',
      tech: ['Java', 'Spring Boot', 'MongoDB', 'Blockchain', 'Face Recognition'],
      github: 'https://github.com/keerthi78621/Biometric-using-blockchain-technology',
      live: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Book Recommendation System',
      description: 'Built recommendation engine using Machine Learning to provide personalized book suggestions based on user preferences and reading history.',
      tech: ['Python', 'Machine Learning', 'React', 'Node.js'],
      github: 'https://github.com/keerthi78621/Book-recommend-system',
      live: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Employee Management System',
      description: 'CRUD operations application for managing employee records, attendance, payroll, and performance evaluations.',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
      github: 'https://github.com/keerthi78621/Employee-management',
      live: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, colorful, and responsive portfolio website built with ReactJS featuring glassmorphism design, gradient animations, and smooth transitions.',
      tech: ['React', 'CSS3', 'React Icons', 'Glassmorphism'],
      github: 'https://github.com/keerthi78621/portfolio',
      live: 'https://keerthika-t.netlify.app',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-featured e-commerce platform with cart functionality, payment integration, and user authentication.',
      tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
      github: 'https://github.com/keerthi78621/Full-Stack-E-commerce-Web-Application',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
