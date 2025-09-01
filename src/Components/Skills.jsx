import React, { useState } from 'react';
import '../Styles/Skills.css';

const Skills = ({ skills }) => {
  const [showAll, setShowAll] = useState(false);

  // Show first 6 skills initially, show all if showAll is true
  const displayedSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon-container">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        {skills.length > 6 && (
          <button
            className="see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
