import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/imagens/Logo.png'
function Footer() {
  return (
    <FooterBase>
      
      <img className="Fot" src={Logo} alt="DanielFlix logo"/>
        
    
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
