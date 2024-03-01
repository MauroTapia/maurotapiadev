import React from 'react';
import { Cards, CardsIn, Alqui, Cuadro, IMG, PStyled, SpanStyled, ImgAlqui, DivAltura, Infoless, Spaninfo2, Pinfo2, VerProyecto } from './projectCard.styles';
import { useState } from 'react';

const ProjectCard = ({ projectData }) => {
  const { logo ,imageSrc, alt, title, description, services, tools, projectLink, githubLink } = projectData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Cards>
      <CardsIn>
        <Alqui>
          <Cuadro>
            <DivAltura>
              <div>
                <ImgAlqui src={logo} alt={alt} />
              </div>
              <SpanStyled>{title}</SpanStyled>
              <PStyled>{description}</PStyled>
            </DivAltura>
            <Infoless>
              <Spaninfo2>Servicios</Spaninfo2>
              <Pinfo2>{services}</Pinfo2>
              <Spaninfo2>Herramientas</Spaninfo2>
              <Pinfo2>{tools}</Pinfo2>
            </Infoless>
            <div>
              <VerProyecto href={projectLink} target="_blank">ver proyecto</VerProyecto>
            </div>
          </Cuadro>
          <div>
          <a href={githubLink} target="_blank">
              <IMG 
                src={imageSrc} 
                alt={alt}
                style={{ cursor: isHovered ? 'pointer' : 'default' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </a>
          </div>
        </Alqui>
      </CardsIn>
    </Cards>
  );
};

export default ProjectCard;