import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 50%; /* Colocar el borde izquierdo en el centro */
  transform: translateX(-50%); /* Centrar horizontalmente */
  max-width: 60rem;
  margin: 0 auto; 
  padding: 0;
  position: fixed; /* Cambiar a fixed */
  z-index: 100;
  background-color: white; /* Añadir un fondo si es necesario */

  a {
    color: var(--colors-blue);
    text-decoration: none; 
  }

  @media (max-width: 600px) {
    height: 6vh;
    max-width: calc(100% - 1px); /* Restar el espacio de los bordes */
    left: 0;
    transform: none;
    padding: 0 10px; /* Añadir espaciado horizontal para dispositivos móviles */
  }
`;

export const LogoWrapper = styled.div`
  font-size: 15px;
  padding: 1rem;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0;
    margin-bottom: 10px; /* Añade un espacio inferior para dispositivos móviles */
  }
`;

export const ButtonDetails = styled.a`
  flex-direction: column;
  font-size: 15px;
  padding: 5px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  background-color: #F7F9F9;
  cursor: pointer;
  color: #C0392B;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;

  &:hover {
    background-color: #D0D3D4;
    transform: scale(1.02);
  }

  &:active {
    background-color: #262829;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 16px;
    display: none;
  }
`;

export const RightPart = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column; /* Muestra verticalmente para dispositivos móviles */
    gap: 10px;
  }
`;

export const LogoHeader = styled.div``;

export const LogosHeader = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;

  @media (max-width: 600px) {
    padding: 10px; /* Ajusta el padding para dispositivos móviles */
    gap: 10px;
  }
`;