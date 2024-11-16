import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const AddCart = (product) => {
    const productFind = cart.find((item) => item.id === product.id);
    if (productFind) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, Quantity: 1 }]);
    }
  };

  const decrementHandle = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.Quantity > 0
            ? { ...item, Quantity: item.Quantity - 1 }
            : item
        )
        .filter((item) => item.Quantity > 0)
    );
  };

  const totalCart = () => {
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.Quantity,
      0
    );
    setTotal(total);
  };

  useEffect(() => {
    totalCart();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, AddCart, decrementHandle, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
