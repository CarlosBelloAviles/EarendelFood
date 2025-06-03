import Cookies from 'js-cookie';

const getCartCookies = () => {
    try {
        const storedCart = Cookies.get("cart");
        return storedCart ? JSON.parse(storedCart) : [];
      } catch (error) {
        console.error("Error al leer el carrito de las cookies:", error);
        return [];
      }
}

const saveCartCookies = (cart) => {
    try {
        if (cart.length > 0) {
            Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
          } else{
            Cookies.remove("cart");
          }
    } catch (error) {
        console.error("Error al guardar el carrito en las cookies:", error);
        
    }
}

export { getCartCookies, saveCartCookies };