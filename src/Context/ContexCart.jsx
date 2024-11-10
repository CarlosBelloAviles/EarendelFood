import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddCart = (product) => {
    const productFind = cart.find((item) => item.id === product.id)
    if (productFind){
      setCart(cart.map(item => item.id === product.id ? { ...item, Quantity : item.Quantity + 1}
       : item

      ))
    } else {
    setCart([...cart, { ...product, Quantity: 1 }]);
  }
  };
  
  return (
    <CartContext.Provider value={{ cart, AddCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
