import React from 'react';

const skillDescriptions = {
  react: "Desarrollo de aplicaciones dinámicas utilizando React para crear interfaces de usuario eficientes.",
  angular: "Experiencia en Angular para construir aplicaciones web robustas y escalables.",
  php: "Desarrollo de aplicaciones del lado del servidor con PHP, integrando soluciones backend sólidas.",
  mysql: "Gestión y consultas avanzadas de bases de datos con MySQL para mantener datos organizados.",
  python: "Uso de Python para desarrollo de scripts automatizados y análisis de datos.",
  javascript: "Creación de funcionalidades interactivas y dinámicas en sitios web con JavaScript.",
  grafana: "Monitoreo y visualización de datos en tiempo real utilizando Grafana."
};

function Description({ skill }) {
  return (
    <div className="description">
      <h2>Descripción de Habilidad</h2>
      <p>{skillDescriptions[skill]}</p>
    </div>
  );
}

export default Description;
