import React from 'react';
import './Education.css';

const Education = () => {
  const educationItems = [
    {
      degree: 'MBA – System Management',
      school: 'University of Madras',
      duration: '2025 - 2027',
      grade: 'Pursuing',
      type: 'mba',
      status: 'pursuing'
    },
    {
      degree: 'B.Tech – Information Technology',
      school: 'Vel Tech University, Chennai',
      duration: '2021 – 2025',
      grade: 'CGPA: 8.12 / 10',
      type: 'college',
      status: 'completed'
    },
    {
      degree: 'Higher Secondary (12th)',
      school: 'Tamil Nadu State Board',
      duration: '2019 – 2021',
      grade: 'Completed',
      type: '12th',
      status: 'completed'
    },
    {
      degree: 'Secondary School (10th)',
      school: 'CBSE',
      duration: '2018 – 2019',
      grade: 'Completed',
      type: '10th',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
      </div>
      
      <div className="education-container">
        {educationItems.map((item, index) => (
          <div className="education-card" key={index}>
            <div className="education-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <div className="education-content">
              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-school">{item.school}</h4>
              <p className="education-duration">{item.duration}</p>
              <p className="education-grade">{item.grade}</p>
              {item.status === 'pursuing' && <span className="pursuing-badge">Currently Pursuing</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
