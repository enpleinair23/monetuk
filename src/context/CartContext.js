// src/context/CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          ...prevCart,
          items: prevCart.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...prevCart, items: [...prevCart.items, { ...item, quantity: 1 }] };
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items
        .map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
    }));
  };

  const clearCart = () => setCart({ items: [] });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
