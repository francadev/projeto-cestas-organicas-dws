import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { signoutUser } from '../../scripts/UsersProvider';

const CarrinhoContainer = styled.div`
  padding: 20px;

  @media (max-width: 970px) {
    padding: 10px;
  }
`;

const Saudacao = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 970px) {
    text-align: center;
  }
`;

const BotaoDeslogar = styled.button`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 970px) {
    width: 100%;
    padding: 15px;
  }
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #4CAF50;
    color: white;
  }

  @media (max-width: 970px) {
    th, td {
      padding: 8px;
      font-size: 14px;
    }
  }
`;

const PrecoTotal = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 970px) {
    text-align: center;
  }
`;

const Botao = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 970px) {
    width: 100%;
    padding: 15px;
  }
`;

const CarrinhoProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  

  useEffect(() => {
    
    const carrinho = [
      { id: 1, nome: 'Produto 1', quantidade: 2, preco: 10.00 },
      { id: 2, nome: 'Produto 2', quantidade: 1, preco: 20.00 },
    ];

   
    setProdutos(carrinho);

    const total = carrinho.reduce((acc, produto) => acc + produto.quantidade * produto.preco, 0);
    setPrecoTotal(total);
  }, []);

  const handleDelete = (id) => {
    const updatedProdutos = produtos.filter(produto => produto.id !== id);
    setProdutos(updatedProdutos);

    const total = updatedProdutos.reduce((acc, produto) => acc + produto.quantidade * produto.preco, 0);
    setPrecoTotal(total);
  };

  const handleLogout = () => {
    signoutUser();
    window.location.href = '/login';
  };

  return (
    <CarrinhoContainer>
      <Saudacao>Olá!</Saudacao>
      <BotaoDeslogar onClick={handleLogout}>Deslogar</BotaoDeslogar>
      <Tabela>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.quantidade}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
              <td>
                <Botao onClick={() => handleDelete(produto.id)}>Deletar</Botao>
              </td>
            </tr>
          ))}
        </tbody>
      </Tabela>
      <PrecoTotal>Total: R$ {precoTotal.toFixed(2)}</PrecoTotal>
      <Botao>Finalizar Compra</Botao>
    </CarrinhoContainer>
  );
}

export default CarrinhoProdutos;
