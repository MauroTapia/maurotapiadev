import React from 'react'
import { HeaderWrapper, LogoWrapper, ButtonDetails, LogoHeader, RightPart, LogosHeader } from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {

  const email = 'maurotapiadev@gmail.com'

  return (
    <HeaderWrapper>
      <LogoWrapper>
            <a href='/'>MT</a >
            <span>|</span >
            <Link to="/contacto">Contacto</Link>
      </LogoWrapper>
      <RightPart>
        <ButtonDetails href={`mailto:${email}`}>{email}</ButtonDetails>
        <LogosHeader>
          <a href='https://github.com/MauroTapia' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          
          <a href='https://www.linkedin.com/in/maurotapia/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </LogosHeader>
      </RightPart>
    </HeaderWrapper>
    
  )
}

export default Header