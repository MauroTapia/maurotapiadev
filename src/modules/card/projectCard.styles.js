import styled from "styled-components";

export const Cards = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 60rem;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #CCCCFF;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;

  &:hover {
    background-color: #F4F4F4; /* Cambio de color al pasar el cursor */
    transform: scale(1.05)
  }
`

export const CardsIn = styled.div`
  max-width: 60rem;
  display: grid;
  grid-template-columns: 1fr;
  margin-left: -8px; 
  z-index: 10;
  padding-right: 10px;
`

export const Alqui = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  margin-top: 4px;
  padding-top: 8px;
  padding-left: 2px;

  @media (max-width: 600px) {
    display: flex;
  }
`


export const Cuadro = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: .75rem;
  padding: 2rem;
  overflow: hidden;
`

export const IMG = styled.img `
  position: relative;
  width: 600px;
  height: 95%;
  object-fit: cover;
  border-radius: 15px;
  overflow: hidden;
  curos: pointer;

  @media (max-width: 768px) {
    width: 100%; 
    display: none;
  }
`

export const SpanStyled = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-top: 25px;
`

export const PStyled = styled.p`
  line-height: 1.375;
  padding-top: 25px;
  color: #808080;
`

export const ImgAlqui = styled.img`
overflow: hidden;
  width: 60px;
  height: auto;
  padding-bottom: 15px;
`

export const DivAltura = styled.div`
  padding-top: 15px;
`

export const Infoless = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`

export const Spaninfo2 = styled.span`
  color: rgb(146 64 14);
  line-height: 1;
  font-weight: 600;
  font-size: .875rem;
`

export const Pinfo2 = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  line-height: 1.25;
  font-size: .830rem;
`

export const VerProyecto = styled.a`
  font-weight: 600;
  font-size: .875rem;
  line-height: 1.25rem;
  background-color: rgb(2 6 23);
  color: white;
  border-radius: 999px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 815px) {

    min-height: 100vh;
    max-width: 100vw;
    
  }
`