import React from 'react';
import './About.css';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const downloadResume = () => {
    // Create a link element to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
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
            I'm a motivated Java Full Stack Developer with expertise in building modern, 
            responsive, and user-friendly web applications. I specialize in Java, 
            Spring Boot, React, and MySQL.
          </p>
          <p className="about-text">
            I'm also pursuing a course in <strong>Data Science with AI</strong>, which has 
            expanded my skills in machine learning, data analysis, and AI technologies. 
            I'm passionate about creating efficient solutions and continuously learning 
            new technologies.
          </p>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <div className="card-content">
                <h4>Location</h4>
                <p>Chennai, Tamil Nadu</p>
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
              <h4>Current Course</h4>
              <p>Data Science with AI | Ongoing</p>
            </div>
            </div>
          </div>
          
          <div className="info-card full-width">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div className="card-content">
              <h4>Certification</h4>
              <p>Besant Technologies - Chennai| May 2025 - Dec 2025</p>
            </div>
          </div>
          
          <a href="Resume_keerthika.pdf" download="Resume_keerthika.pdf" className="btn btn-primary download-btn">
            <FaDownload style={{ marginRight: '8px' }} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
