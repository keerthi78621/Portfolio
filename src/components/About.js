import React from 'react';
import './About.css';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_keerthika.pdf';
    link.download = 'Resume_keerthika.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>
      
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="gradient-border"></div>
            <div className="profile-img">
              <span>KT</span>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <h3 className="about-heading">Who Am I?</h3>
          <p className="about-text">
            I'm an early-career software developer focused on building practical web applications 
            using Java, Spring Boot and React.js, while continuously developing my skills in 
            Machine Learning, Generative AI and Data Science.
          </p>
          <p className="about-text">
            I completed Java Full Stack Development training and am also pursuing Data Science with AI. 
            I enjoy building web applications, learning backend development, creating React interfaces, 
            working with APIs and databases, and exploring Machine Learning concepts.
          </p>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-6V4h6v2z"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>Current Role</h4>
                <p>Associate Software Developer</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>Education</h4>
                <p>B.Tech - Information Technology</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>Email</h4>
                <p>Keerthi21056@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>Focus Areas</h4>
                <p>Java Full Stack & AI/Data Science</p>
              </div>
            </div>
          </div>
          
          <a href="/Resume_keerthika.pdf" download="Resume_keerthika.pdf" className="btn btn-primary download-btn">
            <FaDownload style={{ marginRight: '8px' }} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
