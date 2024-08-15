// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import contato from '../../images/contato.png';

const FooterContainer = styled.footer`
  background-color: #fdfffd;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  
`;

const Divisor = styled.hr`
    border: 4px solid #447832;
    width: 100%;  

`;

const FooterContent = styled.div`

    display: flex;
    margin-top: 11px;
    gap: 500px;
    justify-content: center;

  @media (max-width: 970px) {
      flex-direction: column; 
      gap: 20px; 
  }

`;

const ContatoInfo = styled.div`

    display: flex;
    flex-direction: column;
    white-space: nowrap;
    padding: 0 20px;

  @media (max-width: 970px) {
      flex-direction: column; 
      align-items: center;  
  }

`;

const ContatoTitle = styled.h2`
    color: black;
    font: 700 20px Inter, sans-serif;

  `;

const ContatoText = styled.span`
    margin: auto 0;

    @media (max-width: 970px) {
        .contato-text {
            margin-top: 10px; 
        }
    }

`;

const ContatoDetails = styled.div`
    display: flex;
    margin-top: 10px;
    font: 500 16px Inter, sans-serif;
    color: gray;
    padding: 0 11px;

  `;

  const Logo = styled.img`
    aspect-ratio: 2.13;
    object-fit: auto;
    object-position: center;
    width: 98px;
    align-self: center;
    margin-top: 20px;

  `;

  const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
  `;

  const InfoTitle = styled.h2`
    color: black;
    font: 700 20px Inter, sans-serif;
  
  `;

  const InfoSubtitle = styled.p`
    color: gray;
    margin-top: 10px;
    font: 500 16px Inter, sans-serif;
  
  `;

const Creditos = styled.p`
    color: gray;
    margin-top: 42px;
    font: 400 14px Inter, sans-serif;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <Divisor/>
      <FooterContent>
        <ContatoInfo>
          <ContatoTitle>Atendimento</ContatoTitle>
          <ContatoDetails>
            <img src={contato} alt="Contato" />
            <ContatoText>Contato</ContatoText>
          </ContatoDetails>
          <Logo src={logo} className="logo" alt="Logo" />
        </ContatoInfo>

        <Info>
          <InfoTitle>Informações</InfoTitle>
          <InfoSubtitle>Quem somos</InfoSubtitle>
          <Creditos>Desenvolvido por: Luiza Cuelbas e Rafael França</Creditos>
        </Info>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;