import React from 'react';
import '../Styles/ProjectsCard.css';
import { ArrowUpRight } from 'lucide-react';

const ProjectsCard = ({ title, description, link, tags =[] }) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>

    <div className="project-tags">
      {tags.map((tag,index) => (
        <span key={index} className="project-tag">
          {tag}
        </span>
      ))}
    </div>
     
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      View on GitHub
      <ArrowUpRight className="project-link-icon" />
    </a>
  </div>
);

export default ProjectsCard;