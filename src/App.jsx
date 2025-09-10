import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  Briefcase,
  User,
  Star,
  Zap,
  GitBranch,
  Laptop,
  Puzzle,
  MessageCircle,
  Award,
  Book,
  ChevronsDown,
  ChevronsUp,
} from 'lucide-react';

const portfolioData = {
  name: 'Hi, I am Shova Pandey',
  tagline: 'Frontend Developer who crafts visually stunning websites, blending creativity with seamless functionality.',
  about: 'Hi, I’m Shova, a frontend developer who loves turning ideas into clean, responsive, and user-friendly websites. I work mainly with React.js, HTML, CSS, and JavaScript, and I enjoy building projects that range from Mini E-commerce Apps to small games like Tic-Tac-Toe and Stopwatches. I also have a basic understanding of Python, C, and C++, which helps me tackle problem-solving from different angles. I’m passionate about creating web experiences that feel smooth, intuitive, and visually appealing. Outside of coding, I spend time exploring design trends, learning new tools, and experimenting with creative ideas. I’m always excited to connect, collaborate, and take on projects that challenge me to grow as a developer..',
  skills: [
  { name: 'HTML5', icon: <Star className="skill-icon text-red-400" /> },
  { name: 'CSS3', icon: <User className="skill-icon text-blue-300" /> },
   { name: 'JavaScript', icon: <Zap className="skill-icon text-yellow-400" /> },
  { name: 'React', icon: <Code className="skill-icon text-cyan-400" /> },
  { name: 'Python (basic)', icon: <Code className="skill-icon text-indigo-400" /> },
  { name: 'Git & GitHub', icon: <Briefcase className="skill-icon text-orange-400" /> },
  { name: 'C', icon: <Code className="skill-icon text-gray-400" /> },
  { name: 'C++', icon: <Code className="skill-icon text-gray-500" /> },
  { name: 'C#', icon: <Code className="skill-icon text-purple-400" /> },
  { name: 'PHP', icon: <Code className="skill-icon text-pink-400" /> },
  { name: 'VS Code', icon: <Briefcase className="skill-icon text-teal-400" /> },
  { name: 'Chrome DevTools', icon: <Briefcase className="skill-icon text-blue-500" /> },


  ],
  projects: [
    {
      title: 'Weather App',
      description: 'A responsive React application styled with component CSS that provides real-time weather updates. Features include city search, current weather details, a 5-day forecast, error handling, and loading states for a smooth user experience.',
      link: 'https://github.com/shova10/Weather-App',
      tags: ['React', 'CSS', 'API Integration'],
    },
    {
      title: 'Sample-react-app',
      description: 'A multi-page React application demonstrating client-side routing with react-router-dom. It includes dynamic data fetching from JSONPlaceholder, a custom 404 page, modular components (Home, About, Contact, Postlist), and basic styling for a clean user interface.',
      link: 'https://github.com/shova10/Sample-react-app',
      tags: ['React', 'React Router', 'API Integration', 'SPA'],
}
,
    {
      title: 'Simple Python Calculator',
      description: 'A basic command-line calculator built with Python that performs fundamental arithmetic operations including addition, subtraction, multiplication, and division. It features zero-division handling and a simple text-based interface for ease of use.',
      link: 'https://github.com/shova10/Calculator_',
      tags: ['Python', 'CLI', 'Beginner Project'],
}
,
  ],
  social: {
    github: 'https://github.com/shova10',
    linkedin: 'www.linkedin.com/in/shova-pandey-16b982260',
    email: 'shovap33@gmail.com',
  },
};




const App = () => {
  return (
    <div className="portfolio-app">
    <Header />
    <Hero name={portfolioData.name} tagline={portfolioData.tagline} />
    <main className="main-content">
      <About aboutText={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Contact social={portfolioData.social} />
    </main>
    <Footer name={portfolioData.name} />
 </div>
  );
};

export default App;