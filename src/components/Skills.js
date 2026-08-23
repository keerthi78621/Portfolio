import React from 'react';
import { FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaReact,
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Backend Development',
      icon: SiSpringboot,
      skills: ['Java', 'Spring Boot', 'JSP', 'Servlets', 'REST APIs', 'CRUD Operations']
    },
    {
      title: 'Programming',
      icon: FaJs,
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: ['MySQL']
    },
    {
      title: 'AI & Machine Learning',
      icon: FaPython,
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Supervised Learning', 'Classification', 'Regression', 'Model Evaluation']
    },
    {
      title: 'Data Science & Analytics',
      icon: FaPython,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Statistics', 'Data Preprocessing', 'Feature Engineering', 'Predictive Analytics', 'Data Visualization']
    },
    {
      title: 'Analytics Tools',
      icon: FaPython,
      skills: ['Power BI', 'Excel', 'Tableau']
    },
    {
      title: 'Developer Tools',
      icon: FaGitAlt,
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category-card" key={index}>
              <div className="category-header">
                <div className="category-icon" style={{ color: '#667eea' }}>
                  <category.icon />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
