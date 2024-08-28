import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { FaReact, FaAngular, FaPhp, FaDatabase, FaPython, FaJs, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGrafana, PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import Skill from './components/Skill';
import Description from './components/Descriptions';
import './App.css';

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const handleIconClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleSetActive = (section, element) => {
    setActiveSection(section);

    const elementRect = element.getBoundingClientRect();
    const navbarRect = document.querySelector('.navbar').getBoundingClientRect();

    setIndicatorStyle({
      left: `${elementRect.left - navbarRect.left}px`,
      width: `${elementRect.width}px`
    });
  };

  useEffect(() => {
    scroller.scrollTo(activeSection, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, [activeSection]);

  return (
    <div>
      <nav className="navbar">
        <div className="indicator" style={indicatorStyle}></div>
        <ScrollLink 
          to="about" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'about' ? 'active' : ''} 
          onSetActive={(to, element) => handleSetActive('about', element)}
        >
          Quién Soy
        </ScrollLink>
        <ScrollLink 
          to="experience" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'experience' ? 'active' : ''} 
          onSetActive={(to, element) => handleSetActive('experience', element)}
        >
          Experiencia
        </ScrollLink>
        <ScrollLink 
          to="projects" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'projects' ? 'active' : ''} 
          onSetActive={(to, element) => handleSetActive('projects', element)}
        >
          Proyectos
        </ScrollLink>
        <ScrollLink 
          to="about-more" 
          smooth={true} 
          duration={500} 
          className={activeSection === 'about-more' ? 'active' : ''} 
          onSetActive={(to, element) => handleSetActive('about-more', element)}
        >
          Sobre Mí
        </ScrollLink>
      </nav>

      <Element name="about" className="section">
        <h1>Héctor Urgilés</h1>
        <h2>Ingeniero en Telecomunicaciones - Desarrollador</h2>
        <p>Desarrollador con experiencia en diversas tecnologías y frameworks.</p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#0A66C2" />
        </a>
        <a href="https://wa.me/tu-numero-whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} color="#25D366" />
        </a>
        <a href="mailto:hurgiles@espol.edu.ec">
          <PiMicrosoftOutlookLogoFill size={30} color="#0072C6" />
        </a>
        <a href="mailto:tu-email@outlook.com">
          <FaGithub size={30} color="#0e1012" />
        </a>
      </div>
      </Element>

      <Element name="experience" className="section">
        <h2>Experiencia Laboral</h2>
        <p>Aquí puedes añadir tus experiencias laborales destacadas.</p>
      </Element>

      <Element name="projects" className="section">
        <h2>Proyectos</h2>
        <p>Aquí puedes añadir una lista de proyectos que has realizado.</p>
      </Element>

      <Element name="about-more" className="section">
        <h2>Sobre Mí</h2>
        <p>Más detalles sobre quién eres, tu filosofía de trabajo, intereses, etc.</p>
      </Element>
      
      <div className="skills">
        {['react', 'angular', 'php', 'mysql', 'python', 'javascript', 'grafana'].map(skill => (
          <Skill key={skill} skill={skill} onClick={() => handleIconClick(skill)} />
        ))}
      </div>

      {selectedSkill && (
        <Description skill={selectedSkill} />
      )}

      
    </div>
  );
}

export default App;
