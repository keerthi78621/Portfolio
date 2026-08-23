import React from 'react';
import './CodingPractice.css';

const CodingPractice = () => {
  const stats = [
    { language: 'Java', solved: 33 },
    { language: 'MySQL', solved: 2 },
    { language: 'JavaScript', solved: 2 }
  ];

  return (
    <section id="coding-practice" className="coding-practice">
      <div className="section-header">
        <h2 className="section-title">Coding Practice</h2>
        <p className="section-subtitle">Continuous problem-solving on LeetCode</p>
      </div>
      
      <div className="coding-container">
        <div className="coding-intro">
          <p>
            I regularly practice coding problems to strengthen my problem-solving skills 
            and deepen my understanding of data structures and algorithms.
          </p>
        </div>
        
        <div className="coding-stats">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h4 className="stat-language">{stat.language}</h4>
              <p className="stat-count">{stat.solved}</p>
              <span className="stat-label">Problems Solved</span>
            </div>
          ))}
        </div>
        
        <div className="coding-cta">
          <a href="https://leetcode.com/u/mp73j9Jua1/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View LeetCode Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingPractice;
