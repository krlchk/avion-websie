/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [basketData, setBasketData] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketData));
  }, [basketData]);

  const addToCart = (product, quantity) => {
    setBasketData((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevBasket, { ...product, quantity }];
    });
  };

  const clearBasket = () => {
    setBasketData([]);
    localStorage.removeItem("basket");
  };

  return (
    <CartContext.Provider value={{ basketData, addToCart, clearBasket }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
