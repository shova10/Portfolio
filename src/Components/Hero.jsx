import React from 'react';
import '../Styles/Hero.css';
import ResumePDF from '../assets/Resume_s.pdf';
const Hero = ({name,tagline}) => (
    <section className="Hero">
        <div className="Hero-content">
            <h1 className="Hero-title">{name}</h1>
            <p className="Hero-tagline">{tagline}</p>
           <div className="particles">
  {Array.from({ length: 30 }).map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></span>
  ))}
</div>
<div class="action-buttons">
  <a href={ResumePDF} class="btn resume-btn" target="_blank">📄 Resume</a>
  <a href="mailto:shovap33@gmail.com?subject=Job Opportunity&body=Hello Shova, I’d like to discuss a job opportunity with you." 
   class="btn hire-btn">
   💼 Hire Me
</a>

</div>

        </div>
    </section>
);
export default Hero;