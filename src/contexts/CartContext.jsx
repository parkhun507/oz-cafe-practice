import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((el) => id !== el.id));
  }
  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

