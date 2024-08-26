import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
import { signoutUser } from '../../scripts/UsersProvider';
import { updateProductQuantity } from '../../scripts/ProductsProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CarrinhoContainer = styled.div`
  padding: 20px;

  @media (max-width: 970px) {
    padding: 10px;
  }
`;

const StyledQRCodeImage = styled.img`
  width: 450px;
  height: auto;

  @media (max-width: 970px) {
    width: 300px;
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

const QuantidadeInput = styled.input`
  width: 60px;
  padding: 5px;
  text-align: center;
`;

const BotaoConcluir = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 970px) {
    width: 100%;
    padding: 15px;
  }
`;

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const CarrinhoProdutos = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = async () => {
    try {
      for (const item of cartItems) {
        await updateProductQuantity(item.id, item.quantity);
      }

      clearCart();
      setIsCheckout(true);
    } catch (error) {
      console.error('Erro ao concluir a compra:', error);
      toast.error("Erro ao concluir a compra: " + error.message);
    }
  };

  const handleSignout = () => {
    signoutUser(() => {
      navigate('/'); 
    });
  };

  const totalPrice = typeof getTotalPrice === 'function' ? getTotalPrice() : 0;

  if (isCheckout) {
    return (
      <CarrinhoContainer>
        <Saudacao>Obrigado pela compra!</Saudacao>
        <p>Seu pedido foi processado com sucesso!</p>
        <p>Utilize o QR Code abaixo para realizar o pagamento. Por favor, salve o comprovante e apresente-o no momento da retirada.</p>
        <StyledQRCodeImage src='https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png'></StyledQRCodeImage>
      </CarrinhoContainer>
    );
  }

  return (
    <CarrinhoContainer>
      <Saudacao>Olá!</Saudacao>
      <BotaoDeslogar onClick={handleSignout}>Deslogar</BotaoDeslogar>
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
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <QuantidadeInput
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  />
                </td>
                <td>{formatCurrency(item.value * item.quantity)}</td>
                <td>
                  <Botao onClick={() => handleDelete(item.id)}>Deletar</Botao>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Seu carrinho está vazio.</td>
            </tr>
          )}
        </tbody>
      </Tabela>
      <PrecoTotal>Total: {formatCurrency(totalPrice)}</PrecoTotal>
      <BotaoConcluir onClick={handleCheckout}>Concluir Compra</BotaoConcluir>
    </CarrinhoContainer>
  );
};

export default CarrinhoProdutos;
