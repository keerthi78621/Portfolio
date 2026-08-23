import React from 'react';
import './FullStack.css';

const FullStack = () => {
  return (
    <section id="fullstack" className="fullstack">
      <div className="section-header">
        <h2 className="section-title">Java Full Stack Development</h2>
        <p className="section-subtitle">My full-stack learning path</p>
      </div>
      
      <div className="fullstack-container">
        <div className="fullstack-intro">
          <p>
            My Java Full Stack learning focuses on building web applications with React.js on the frontend, 
            Spring Boot and Java on the backend, REST APIs for communication, and MySQL for database integration.
          </p>
        </div>
        
        <div className="architecture-flow">
          <div className="flow-step">
            <div className="flow-icon">⚛️</div>
            <div className="flow-label">React.js</div>
            <div className="flow-arrow">→</div>
          </div>
          <div className="flow-step">
            <div className="flow-icon">🔌</div>
            <div className="flow-label">REST API</div>
            <div className="flow-arrow">→</div>
          </div>
          <div className="flow-step">
            <div className="flow-icon">🍃</div>
            <div className="flow-label">Spring Boot</div>
            <div className="flow-arrow">→</div>
          </div>
          <div className="flow-step">
            <div className="flow-icon">☕</div>
            <div className="flow-label">Java</div>
            <div className="flow-arrow">→</div>
          </div>
          <div className="flow-step">
            <div className="flow-icon">🗄️</div>
            <div className="flow-label">MySQL</div>
          </div>
        </div>
        
        <div className="fullstack-details">
          <div className="detail-card">
            <h4>Frontend</h4>
            <p>Building responsive user interfaces with React.js, JavaScript, HTML and CSS.</p>
          </div>
          <div className="detail-card">
            <h4>Backend</h4>
            <p>Developing RESTful services using Java, Spring Boot, JSP and Servlets with proper CRUD operations.</p>
          </div>
          <div className="detail-card">
            <h4>Database</h4>
            <p>Designing and integrating MySQL databases with backend applications for data persistence.</p>
          </div>
          <div className="detail-card">
            <h4>Concepts</h4>
            <p>Core Java, OOP concepts, Spring Boot, REST APIs, database integration and full-stack application development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullStack;
