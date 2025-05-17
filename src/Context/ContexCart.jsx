import { createContext, useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
 
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = Cookies.get("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error al leer el carrito de las cookies:", error);
      return [];
    }
  });
 
  useEffect(() => {
    if (cart.length > 0) {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    } else{
      Cookies.remove("cart");
    }
  }, [cart]);

  const AddCart = (product) => {
    if (!product || !product.id || !product.price) {
      console.error("Producto inválido:", product);
      return;
    }

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
    if (!cart.some((item) => item.id === id)) {
      console.error("Producto no encontrado en el carrito:", id);
      return;
    }  

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

 
 const totalCart = useMemo(() => {
  return cart.reduce(
    (acc, product) => acc + product.price * product.Quantity,
    0
  );
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, AddCart, decrementHandle, totalCart }}>
      {children}
    </CartContext.Provider>
  );
};