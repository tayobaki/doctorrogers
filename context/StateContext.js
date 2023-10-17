"use client";

import { useContext, useState, createContext } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(0);
  // const [cartQty, setCartQty] = useState(1);
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(false);
  const [totalQuantities, setTotalQuantities] = useState(false);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty <= 1) return 1;
      return prevQty - 1;
    });
  };

  const addToCart = (product, quantity) => {

    const productInCart = cartItems.find((item) => item.slug === product.slug);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (productInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.slug === product.slug)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        else return { ...cartProduct };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };
  return (
    <Context.Provider
      value={{ qty, setQty, decQty, incQty, addToCart, cart, setCart }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
