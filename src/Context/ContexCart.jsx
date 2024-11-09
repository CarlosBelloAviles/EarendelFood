import { createContext, useState } from "react";



export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart]= useState([])

    const AddCart = (product) =>{
      setCart([...cart ,{...product, Quantity: 1} ])
    }
 console.log(cart)
return (
    <CartContext.Provider value={{cart, AddCart}}>
        {children}
    </CartContext.Provider>
);
};

export default CartProvider;