import React from 'react';
import styled from 'styled-components';
import fundoCadastro from '../../images/fundoCadastro.png';
import { ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import { autenticateUser } from '../../scripts/UsersProvider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

  @media (max-width: 970px) {
      flex-direction: column;
      align-items: center;
      padding: 10px;
  }
`;

const Formulario = styled.section`
  flex: 1;
  max-width: 50%;
  padding-right: 20px;


  p {
    margin-top: 20px;
  }

  .path-cadastro {
    color: #4CAF50;
    cursor: pointer;

    &:hover {
      color: #45a049;
    }
  }

  @media (max-width: 970px) {
      max-width: 100%;
      padding-right: 0;
      padding-bottom: 20px;
  }
`;

const Titulo = styled.h1`
  font-size: 2em; 
  margin-bottom: 20px;

`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

`;

const LabelLogin = styled.label`
  margin-top: 15px;

`;

const InputLogin = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1em;

`;

const BotaoLogin = styled.button`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: #45a049;
    }

`;

const Imagem = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 970px) {
    max-width: 100%;

    img {
      width: 100%;
    }
  }
`;



const Login = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    autenticateUser(email, senha);
  };


  return (
    <Container>
      <ToastContainer />
      <MainContent id="main-content">
        <Formulario className="formulario">
          <Titulo>Login</Titulo>
          <FormLogin onSubmit={handleLogin}>
            <LabelLogin htmlFor="email">Endereço de email</LabelLogin>
            <InputLogin type="email" id="email" required/>

            <LabelLogin htmlFor="senha">Senha</LabelLogin>
            <InputLogin type="password" id="senha" required/>

            <BotaoLogin type="submit">Login</BotaoLogin>

            <p>Não possui conta? Faça o <Link to="/cadastro-usuarios" className="path-cadastro">Cadastro</Link></p>
          </FormLogin>
        </Formulario>
        <Imagem className="imagem">
          <img src={fundoCadastro} alt="Imagem de fundo para login" />
        </Imagem>
      </MainContent>
      
    </Container>
  );
}

export default Login;