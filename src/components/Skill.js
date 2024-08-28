import React from 'react';
import { FaReact, FaAngular, FaPhp, FaDatabase, FaPython, FaJs, FaChartLine } from 'react-icons/fa';
import { SiGrafana } from "react-icons/si";
const icons = {
    react: <FaReact size={40} color="#61DBFB" />,
    angular: <FaAngular size={40} color="#DD0031" />,
    php: <FaPhp size={40} color="#787CB5" />,
    mysql: <FaDatabase size={40} color="#F29111" />,
    python: <FaPython size={40} color="#4B8BBE" />,
    javascript: <FaJs size={40} color="#F0DB4F" />,
    grafana: <SiGrafana size={40} color="#00A1AB" />,
};

function Skill({ skill, onClick }) {
    return (
    <div onClick={onClick} aria-label={skill} className="skill-icon">
        {icons[skill]}
    </div>
    );
}

export default Skill;
