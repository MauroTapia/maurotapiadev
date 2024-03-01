import styled from 'styled-components';

export const SeparatorLine = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;  // Puedes ajustar el color y el estilo de la línea según tus preferencias
  margin: 3vw auto;  // Ajustado para que el espacio entre la línea y los elementos vecinos sea del 3% del ancho de la ventana gráfica
  max-width: 90%;  // Limita el ancho máximo de la línea al 90% del ancho de la ventana gráfica
  width: 60rem;  // Ancho fijo para pantallas más grandes
`;
