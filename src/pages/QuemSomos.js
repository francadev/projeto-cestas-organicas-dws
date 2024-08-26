import React from 'react';
import styled from 'styled-components';

const QuemSomosText = styled.p`
    padding: 20px;
    height: 60vh;
`;

const QuemSomosSubtext = styled.p`
    width: 1000px;
    margin: 20px 10px 10px 30px;
`;

function QuemSomos () {
    return (
        <QuemSomosText>
            <h2>Quem Somos</h2>
            <QuemSomosSubtext>Prazer,</QuemSomosSubtext>
            <QuemSomosSubtext>
            Somos Rafael e Luiza, estudantes do curso de Análise e Desenvolvimento de Sistemas da Faculdade IFSP Campinas. Este projeto é uma parte fundamental do nosso aprendizado na disciplina de Desenvolvimento Web, no quinto semestre do curso.
            </QuemSomosSubtext>
            <QuemSomosSubtext>
            Estamos desenvolvendo este aplicativo com o objetivo de aplicar na prática os conceitos e habilidades adquiridos durante o curso. Ao longo do semestre, tivemos a oportunidade de explorar diversas tecnologias e metodologias de desenvolvimento, e este projeto é uma demonstração do nosso compromisso com a criação de soluções tecnológicas eficientes e inovadoras.
            </QuemSomosSubtext>
            <QuemSomosSubtext>
            Agradecemos a você por acompanhar nosso trabalho e esperamos que o resultado final atenda às suas expectativas (nota 10 hehehe). Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato!
            </QuemSomosSubtext>
        </QuemSomosText>
    );
  }
  
  export default QuemSomos;