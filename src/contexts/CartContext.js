import React, { createContext, useContext, useState } from 'react';
import { db } from '../scripts/env';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (product) => {
    try {
      const productRef = doc(db, 'products', product.id);
      const productDoc = await getDoc(productRef);
  
      if (productDoc.exists()) {
        const productData = productDoc.data();
        const availableQuantity = productData.quantity;
  
        setCartItems(prevItems => {
          const cartProduct = prevItems.find(item => item.id === product.id);
  
          if (cartProduct) {
            const newQuantity = cartProduct.quantity + 1;
            if (newQuantity > availableQuantity) {
              toast.info(`Quantidade máxima para ${product.name} alcançada. Quantidade ajustada para ${availableQuantity}.`);
              return prevItems.map(item =>
                item.id === product.id ? { ...item, quantity: availableQuantity } : item
              );
            }
            toast.success(`${product.name} atualizado no carrinho. Quantidade: ${newQuantity}`);
            return prevItems.map(item =>
              item.id === product.id ? { ...item, quantity: newQuantity } : item
            );
          }
  
          toast.success(`${product.name} adicionado ao carrinho.`);
          return [...prevItems, { ...product, quantity: 1, availableQuantity }];
        });
      }
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      toast.error('Erro ao adicionar produto ao carrinho.');
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      const productRef = doc(db, 'products', productId);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        const productData = productDoc.data();
        const availableQuantity = productData.quantity;

        if (newQuantity < 1) {
          newQuantity = 1;
        }

        if (newQuantity > availableQuantity) {
          toast.info(`Quantidade máxima para o produto alcançada. Quantidade ajustada para ${availableQuantity}.`);
          newQuantity = availableQuantity;
        }

        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
        );
      }
    } catch (error) {
      console.error('Erro ao atualizar a quantidade do produto:', error);
      toast.error('Erro ao atualizar a quantidade do produto.');
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.value, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotalPrice, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);