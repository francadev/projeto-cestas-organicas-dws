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
import QuemSomos from './pages/QuemSomos';
import { CartProvider } from './contexts/CartContext';
import CarrinhoProdutos from './components/CarrinhoProdutos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro-usuarios' element={<CadastroUsuarios />} />
          <Route path='/login' element={<LoginUsuarios />} />
          <Route path='/cadastro-produtos' element={<CadastroProdutos />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/:category' element={<Home />} />
          <Route path='/search/:searchTerm' element={<Home />} />
          <Route path="/carrinho-produtos" element={<CarrinhoProdutos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();