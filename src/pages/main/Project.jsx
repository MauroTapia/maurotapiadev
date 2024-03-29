import React from 'react';
import ProjectCard from '../../modules/card/ProjectCard'; // Ajusta la ruta según tu estructura de carpetas
import { SeparatorLine } from './Project.styles';


const Projects = () => {
  const projectsData = [
    {
      logo: "https://raw.githubusercontent.com/MauroTapia/maurotapiadev/main/src/assets/img/alquicancha.png",
      imageSrc: "https://raw.githubusercontent.com/MauroTapia/maurotapiadev/main/src/assets/img/64shots_so.png",
      alt: "undefined",
      title: "Alquicancha",
      description: "Una aplicacion movil encargada de reservar canchas deportivas.",
      services: "Start and finish development.",
      tools: "React, Firebase",
      projectLink: "https://alquicancha-d6d01.web.app/",
      githubLink: "https://github.com/MauroTapia/Alquicancha"
    },
    {
        logo: "https://raw.githubusercontent.com/MauroTapia/maurotapiadev/main/src/assets/img/dientin.png",
        imageSrc: "https://raw.githubusercontent.com/MauroTapia/maurotapiadev/main/src/assets/img/clinica.PNG",
        alt: "undefined",
        title: "Clinica odontologica",
        description: "Aplicacion para gestionar turnos odontologicos.",
        services: "Start and finish development.",
        tools: "Java, Spring, Hibernate",
        projectLink: "https://github.com/MauroTapia/ClinicaOdontologica",
        githubLink: "https://www.linkedin.com/feed/update/urn:li:activity:7092611628780650496/"
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