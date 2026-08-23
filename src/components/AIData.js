import React from 'react';
import './AIData.css';

const AIData = () => {
  return (
    <section id="aidata" className="aidata">
      <div className="section-header">
        <h2 className="section-title">AI & Data Science Journey</h2>
        <p className="section-subtitle">Currently developing skills in AI and data-driven technologies</p>
      </div>
      
      <div className="aidata-container">
        <div className="aidata-intro">
          <p>
            Alongside full-stack development, I am developing skills in Machine Learning, Deep Learning, 
            Generative AI and Data Science. This journey focuses on turning data into actionable insights 
            and building intelligent systems.
          </p>
        </div>
        
        <div className="aidata-flow">
          <div className="aidata-step">
            <div className="aidata-icon">🐍</div>
            <div className="aidata-label">Python</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">📊</div>
            <div className="aidata-label">Data Processing</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">🤖</div>
            <div className="aidata-label">Machine Learning</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">🔨</div>
            <div className="aidata-label">Model Building</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">📈</div>
            <div className="aidata-label">Evaluation</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">📉</div>
            <div className="aidata-label">Visualization</div>
            <div className="aidata-arrow">→</div>
          </div>
          <div className="aidata-step">
            <div className="aidata-icon">✨</div>
            <div className="aidata-label">Generative AI</div>
          </div>
        </div>
        
        <div className="aidata-details">
          <div className="aidata-card">
            <h4>Machine Learning</h4>
            <p>Supervised Learning, Classification, Regression, Model Evaluation and predictive modeling.</p>
          </div>
          <div className="aidata-card">
            <h4>Data Science</h4>
            <p>Data preprocessing, feature engineering, predictive analytics and data visualization using Pandas, NumPy and Matplotlib.</p>
          </div>
          <div className="aidata-card">
            <h4>Generative AI</h4>
            <p>Exploring Generative AI concepts and their applications in real-world scenarios.</p>
          </div>
          <div className="aidata-card">
            <h4>Tools & Libraries</h4>
            <p>Scikit-learn, Pandas, NumPy, Matplotlib, Power BI, Excel and Jupyter Notebook.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIData;
