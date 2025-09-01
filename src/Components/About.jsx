import React from 'react';
import '../Styles/About.css'

const About = ({aboutText}) =>(
    <section id="about" className="about-section">
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <p className="about-Text">{aboutText}</p>
        </div>
    </section>
);
export default About;