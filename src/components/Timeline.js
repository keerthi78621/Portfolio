import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineItems = [
    {
      year: 'May 2025 – Dec 2025',
      title: 'Java Full Stack Development Training',
      subtitle: 'Izeon IT Training',
      description: 'Completed comprehensive training in Java Full Stack Development, covering Core Java, Spring Boot, React.js, REST APIs and MySQL.'
    },
    {
      year: 'Feb 2026 – Jul 2026',
      title: 'Data Science with AI Training',
      subtitle: 'Besant Technologies',
      description: 'Completed training in Machine Learning, Deep Learning, Generative AI, and data analytics tools.'
    }
  ];

  return (
    <section id="timeline" className="timeline">
      <div className="section-header">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">My growth path</p>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
