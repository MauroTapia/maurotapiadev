import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    padding: 0 1rem; 
    max-width: 34rem;
    width: 90%; /* Cambiado a un ancho relativo para adaptarse mejor a diferentes tamaños de pantalla */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FlexContainer = styled.div`
    margin-top: 90px;
    display: flex;
    flex-direction: column;
`;

export const StyledH1 = styled.h1`
    color: rgb(193 59 40);
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 2.25rem;
    font-weight: 502;
    font-size: 1.875rem;
    font-family: 'Roboto';
`;

export const StyledSpan = styled.span`
    font-weight: 600;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem; /* Añadido un espaciado entre las columnas en todos los tamaños de pantalla */
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const LinkContainer = styled.a`
    margin: 20px;
    border: 1px solid #e5e7eb; /* Ajustado el borde para ser visible en dispositivos móviles */
    font-size: 15px;
    padding: 1.25rem;
    border-radius: 0.75rem;
    align-items: center;
    display: flex;
    color: inherit;
    text-decoration: inherit;
`;

export const StyledP = styled.p`
    line-height: 1.625;
    font-size: 1.125rem;
    color: #767676;
`;

export const CV = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Stylea = styled.a`
    text-decoration: inherit;
    line-height: 1.625;
    font-size: 1.125rem;
`;

export const SeparatorLine = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;  // Puedes ajustar el color y el estilo de la línea según tus preferencias
    margin: 30px auto;  // Puedes ajustar el espacio entre la línea y los elementos vecinos
    width: 90%; // Cambiado a un ancho relativo para adaptarse mejor a diferentes tamaños de pantalla
    max-width: 34rem; // Añadido un ancho máximo para evitar que la línea sea demasiado ancha en pantallas grandes
    opacity: 60%;
`;