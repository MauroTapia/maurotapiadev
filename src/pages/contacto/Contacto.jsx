import React from 'react'
import { Container, FlexContainer, GridContainer, LinkContainer, StyledH1, StyledSpan, StyledP, CV, Stylea, SeparatorLine } from './contacto.styles'
import Footer from '../../modules/footer'



const Contacto = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const email = 'maurotapiadev@gmail.com'

  return (
    <Container className={mounted ? 'Container show' : 'Container'}>
      <FlexContainer>
        <StyledSpan>Hagamos tu idea posible</StyledSpan>
        <StyledH1>Ponte en contacto conmigo</StyledH1>
        <StyledP>¡Gracias por considerar mis servicios! Por favor, siéntete libre de contactarme a través de los canales que se encuentran a continuación, o conéctate conmigo en las redes sociales.</StyledP>
      </FlexContainer>
      
      <GridContainer>
        {/* Enlaces */}
        <LinkContainer href={`mailto:${email}`}><i className="fas fa-envelope"></i>Mail</LinkContainer>
        <LinkContainer href="https://twitter.com/">Twitter</LinkContainer>
        <LinkContainer href="https://github.com/MauroTapia">GitHub</LinkContainer>
        <LinkContainer href="https://www.facebook.com/">Facebook</LinkContainer>
        {/* ... (Agregar el resto de los enlaces) */}
      </GridContainer>
      {/* <SeparatorLine /> */}
      <CV>
        <StyledSpan>Visualiza mi CV</StyledSpan>
        <LinkContainer href="https://github.com/MauroTapia/CV/blob/main/Curriculum.PNG" target='blank'>CV</LinkContainer>
      </CV>
      <SeparatorLine />
      <Footer/>
    </Container>
  )
}

export default Contacto