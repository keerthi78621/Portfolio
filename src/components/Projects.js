import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Diabetes Prediction System using Machine Learning',
      description: 'A Machine Learning project designed to predict diabetes using patient health data. The project includes data preprocessing, feature engineering and model building to provide accurate predictions.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Machine Learning'],
      github: 'https://github.com/keerthi78621/diabetes-prediction',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Full-Stack E-Commerce Web Application',
      description: 'A full-stack e-commerce application developed with React.js, Spring Boot and MySQL, including product management and REST API integration for a complete shopping experience.',
      tech: ['React.js', 'Spring Boot', 'Java', 'MySQL', 'REST APIs'],
      github: 'https://github.com/keerthi78621/Full-Stack-E-commerce-Web-Application',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Blockchain-Based Secure Biomedical Data Collection System',
      description: 'A final-year project focused on protecting biomedical data using secure authentication, face recognition and SHA-256 hashing for secure data storage.',
      tech: ['Blockchain', 'SHA-256', 'Secure Data Storage', 'Biomedical Data', 'Face Recognition'],
      github: 'https://github.com/keerthi78621/biometric-medical-system',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Employee Management System',
      description: 'A complete CRUD application for managing developer information with RESTful APIs and a responsive user interface.',
      tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'CRUD'],
      github: 'https://github.com/keerthi78621/Employee-management',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Book Recommendation System',
      description: 'A complete machine learning project using Item-Based Collaborative Filtering with Cosine Similarity to recommend books based on user preferences.',
      tech: ['Python', 'Machine Learning', 'Collaborative Filtering'],
      github: 'https://github.com/keerthi78621/Book-recommend-system-',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern and colorful personal portfolio website built using ReactJS, HTML, and CSS with responsive design and attractive UI.',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      github: 'https://github.com/keerthi78621/Portfolio',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
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
