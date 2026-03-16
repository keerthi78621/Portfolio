import React from 'react';
import { FaJava, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiBootstrap, SiMongodb, SiTensorflow, SiScikitlearn } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: FaJava, level: 85, color: '#f89820' },
    { name: 'Spring Boot', icon: SiSpringboot, level: 80, color: '#6db33f' },
    { name: 'React.js', icon: FaReact, level: 80, color: '#61dafb' },
    { name: 'JavaScript', icon: FaJs, level: 80, color: '#f7df1e' },
    { name: 'HTML5', icon: FaHtml5, level: 90, color: '#e34c26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#264de4' },
    { name: 'Python', icon: FaPython, level: 75, color: '#3776ab' },
    { name: 'Bootstrap', icon: SiBootstrap, level: 80, color: '#7952b3' },
    // { name: 'Node.js', icon: FaNodeJs, level: 70, color: '#68a063' },
    { name: 'MySQL', icon: SiMysql, level: 75, color: '#00758f' },
    // { name: 'MongoDB', icon: SiMongodb, level: 65, color: '#4db33d' },
    // { name: 'TensorFlow', icon: SiTensorflow, level: 60, color: '#ff6f00' },
    // { name: 'Scikit-Learn', icon: SiScikitlearn, level: 60, color: '#f7931e' },
    { name: 'Git', icon: FaGitAlt, level: 80, color: '#f05032' },
    { name: 'GitHub', icon: FaGithub, level: 80, color: '#181717' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="concepts-grid">
          <div className="concept-card">
            <h4>Core Concepts</h4>
            <div className="concept-tags">
              <span>OOP</span>
              <span>REST APIs</span>
              <span>MVC</span>
              <span>CRUD</span>
              <span>Data Structures</span>
            </div>
          </div>
          <div className="concept-card">
            <h4>Data Science & AI</h4>
            <div className="concept-tags">
              <span>Machine Learning</span>
              <span>Data Analysis</span>
              <span>Neural Networks</span>
              <span>NLP</span>
            </div>
          </div>
          <div className="concept-card">
            <h4>Tools</h4>
            <div className="concept-tags">
              <span>Maven</span>
              <span>Apache Tomcat</span>
              <span>VS Code</span>
              <span>Jupyter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
