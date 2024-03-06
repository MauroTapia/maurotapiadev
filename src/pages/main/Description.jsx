import React from 'react'
import { Main, H1, H2, P, ButtonDisponibile, Maurito} from './description.styles'
import { Link } from 'react-router-dom';


const Description  = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section>
      <Main className={mounted ? 'Main show' : 'Main'}>
        <H1>Hey! <Maurito src="https://raw.githubusercontent.com/MauroTapia/maurotapiadev/main/src/assets/img/maurito.jpg" alt="nofound" />soy Mauro Tapia</H1>
        <H2>Construyo productos digitales y experiencias en la web</H2>
        <P>Soy un software engineer que le apasiona diseñar interfaces. Actualmente, enfocado en el desarrollo y diseño de productos digitales simples, amigables y rápidos.</P>
        <Link to={"/contacto"}><ButtonDisponibile >Disponible para tu proyecto</ButtonDisponibile></Link>
      </Main>

    </section>
      
  )
}

export default Description 