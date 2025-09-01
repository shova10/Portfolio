import React from 'react';
import ProjectsCard from '../Components/ProjectsCard';
import '../Styles/Projects.css';

const Projects = ({ projects }) => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
      <div className="github-link-container">
        <a 
          href="https://github.com/shova10" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-button"
        >
          More Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;