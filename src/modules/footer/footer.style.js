import styled from "styled-components";

export const FooterStyle = styled.div`
    width: 100%;
    min-height: 100px;
    height: 80px;
    top: 0;
    left: 0;
    max-width: 60rem;
    margin: 0 auto; 
    padding: 0;
    position: relative;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    padding: 0 20px; /* Añade un espacio a ambos lados del footer */

    a {
        color: var(--colors-blue);
        text-decoration: none;
    }

    @media (max-width: 600px) {
        height: 60px; /* Ajusta la altura para dispositivos móviles */
    }
`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Maurito = styled.img`
    width: 50px;
    border-radius: 50px;

    @media (max-width: 600px) {
        width: 40px; /* Ajusta el tamaño para dispositivos móviles */
    }
`;

export const LogosHeader = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;

    @media (max-width: 600px) {
        padding: 10px; /* Ajusta el padding para dispositivos móviles */
        gap: 10px;
    }
`;
