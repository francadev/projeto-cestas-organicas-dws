
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import CadastroUsuarios from './pages/CadastroUsuarios';
import LoginUsuarios from './pages/LoginUsuarios';
import Home from './pages/Home';
import CadastroProdutos from './pages/CadastroProdutos';
import Carrinho from './pages/Carrinho';



const GlobalStyle = createGlobalStyle`

* {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

a {
    color: black;
    text-decoration: none;
}

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    
    <Header />
    <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/cadastro-usuarios' element ={<CadastroUsuarios />} />
        <Route path='/login' element ={<LoginUsuarios />} />
        <Route path='/cadastro-produtos' element ={<CadastroProdutos />} />
        <Route path='/carrinho' element ={<Carrinho />}/>
        <Route path='/:category' element={<Home />} />
        <Route path='/search/:searchTerm' element={<Home />} />
    </Routes>
    <Footer />
    
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
