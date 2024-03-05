import React from 'react';
import ProjectCard from '../../modules/card/ProjectCard'; // Ajusta la ruta según tu estructura de carpetas
import { SeparatorLine } from './Project.styles';


const Projects = () => {
  const projectsData = [
    {
      logo: "./src/assets/img/alquicancha.png",
      imageSrc: "./src/assets/img/alqui.png",
      alt: "undefined",
      title: "Alquicancha",
      description: "Una aplicacion movil encargada de reservar canchas deportivas.",
      services: "Start and finish development.",
      tools: "React, Firebase",
      projectLink: "https://alquicancha-d6d01.web.app/",
      githubLink: "https://github.com/MauroTapia/Alquicancha"
    },
    {
        logo: "./src/assets/img/dientin.png",
        imageSrc: "./src/assets/img/clinica.png",
        alt: "undefined",
        title: "Clinica odontologica",
        description: "Aplicacion para gestionar turnos odontologicos.",
        services: "Start and finish development.",
        tools: "Java, Spring, Hibernate",
        projectLink: "https://github.com/MauroTapia/ClinicaOdontologica"
      },
    // Otros proyectos...
  ];

  return (
    <div>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectCard projectData={project} />
          {index === projectsData.length - 1 }
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;