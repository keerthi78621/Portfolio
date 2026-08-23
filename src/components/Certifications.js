import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      provider: 'Izeon IT Training',
      duration: 'May 2025 – December 2025',
      topics: [
        'Core Java',
        'Spring Boot',
        'React.js',
        'REST APIs',
        'MySQL',
        'Full-stack application development'
      ],
      status: 'Completed'
    },
    {
      title: 'Data Science with AI',
      provider: 'Besant Technologies',
      duration: 'February 2026 – July 2026',
      topics: [
        'Machine Learning',
        'Deep Learning',
        'Generative AI',
        'Data preprocessing',
        'Model building',
        'Predictive analytics',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Power BI',
        'Excel',
        'Data visualization'
      ],
      status: 'Completed'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="section-header">
        <h2 className="section-title">Certifications & Learning</h2>
        <p className="section-subtitle">My learning journey</p>
      </div>
      
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-header">
              <h3 className="cert-title">{cert.title}</h3>
              <span className={`cert-status ${cert.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                {cert.status}
              </span>
            </div>
            <p className="cert-provider">{cert.provider}</p>
            <p className="cert-duration">{cert.duration}</p>
            <div className="cert-topics">
              <h4>Topics Covered</h4>
              <div className="topic-tags">
                {cert.topics.map((topic, i) => (
                  <span key={i} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
