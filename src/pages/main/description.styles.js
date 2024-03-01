import styled from "styled-components";

export const Main = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 60rem;
  max-height: 300px;
  z-index: 50;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 1rem; 
  position: relative;
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-height: 100%;
  }
`;


export const H1 = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 800;
  color: rgb(193 59 40);
  max-width: 34rem;
`;

export const H2 = styled.h2`
  max-width: 34rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

export const P = styled.p`
  max-width: 34rem;
`;

export const ButtonDisponibile = styled.button`
  margin-top: 10px;
  width: 250px;
  padding: 10.5px 15px;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  background-color: #030303;
  cursor: pointer;
  color: #c2c2c2;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;

  &:hover {
    background-color: #171717;
    transform: scale(1.02);
  }

  &:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.95);
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export const Maurito = styled.img`
  width: 50px;
  border-radius: 50px;

  @media (max-width: 600px) {
    width: 30px; /* Ejemplo de ajuste de tamaño para pantallas pequeñas */
  }
`;