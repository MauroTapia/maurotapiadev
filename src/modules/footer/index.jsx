import React from 'react'
import { FooterStyle, FooterDiv, Maurito, LogosHeader} from './footer.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

  const email = 'maurotapiadev@gmail.com'

  return (
    <FooterStyle>
      <FooterDiv>
            <Maurito src="/assets/img/maurito.jpg" alt="nofound" />
            <a href='/'>Mauro Tapia</a >
            <span>Creado en Argentina</span>
      </FooterDiv>
            <div>
              <LogosHeader>
                <a href='https://github.com/MauroTapia' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/maurotapia/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
              </LogosHeader>
        </div>
    </FooterStyle>
    
  )
}

export default Footer