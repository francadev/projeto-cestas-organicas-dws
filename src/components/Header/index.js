
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import lupaBusca from '../../images/lupaBusca.png';
import carrinho from '../../images/carrinho.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../scripts/env';

const HeaderContainer = styled.header`
`;

const TopBar = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;

    .logo {
    height: 50px;
  }

  @media (max-width: 970px) {
      padding: 10px;
      flex-direction: column;
      align-items: stretch;

      .logo {
            align-self: center; 
            margin-bottom: 10px; 
        }
}

`

const BuscaContainer = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 200px; 

    .search-bar {
        width: 100%;
        padding: 10px 20px 10px 40px; 
        background: url(${lupaBusca}) no-repeat 10px;
        border: 1px solid;
        border-radius: 5px;
    }

    @media (max-width: 970px) { 
        margin: 10px 0;
    }


`

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 10px;
    text-decoration: none;
    color: #333;

    a:hover {
        color: green;
    }
    
    .carrinho-link {
        padding-left: 30px; 
        background: url(${carrinho}) no-repeat 5px center;
    }


    @media (max-width: 970px) { 
        justify-content: center; 
        width: 100%;
    }


`

const NavBar = styled.div`
    background-color: #3A9955;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px; 
    flex-wrap: wrap;

    .link {
        color: white;
    }

    .link:hover {
        color: rgb(70, 53, 53);
    }


    @media (max-width: 970px) { 
        flex-direction: column;
        align-items: stretch;


        .link {
            text-align: center;
            padding: 10px 0;
            width: 100%; 
        }
    }
`

const Divisor = styled.hr`
    border-left: 1px solid white;
    height: 20px;
    margin: 0 10px;


 
    @media (max-width: 970px) {
        display: none; 
    }
`

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    } else {
      navigate('/'); 
    }
  }, [searchTerm, navigate]);

  return (
    <HeaderContainer>
      <TopBar>
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <BuscaContainer>
          <input 
          type="search" 
          placeholder="Buscar por produtos..." 
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
          />
        </BuscaContainer>
        <LinksContainer>
          <NavLink to={isLoggedIn ? '/cadastro-produtos' : '/login'}>Cadastrar um produto</NavLink>
          {!isLoggedIn && (
            <NavLink to='/login'>Entre ou cadastre-se</NavLink>
          )}
          <NavLink to={isLoggedIn ? '/carrinho' : '/login'} className="carrinho-link">
            <span>Meu carrinho</span>
          </NavLink>
        </LinksContainer>
      </TopBar>

      <NavBar>
      <Divisor/>
        <NavLink to='/' className="link">Todos os produtos</NavLink>
        <Divisor/>
        <NavLink to='/legume' className="link">Legumes</NavLink>
        <Divisor/>
        <NavLink to='/verdura' className="link">Verduras</NavLink>
        <Divisor/>
        <NavLink to='/fruta' className="link">Frutas</NavLink>
        <Divisor/>
      </NavBar>

    </HeaderContainer>
  );
}

export default Header;