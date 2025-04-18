import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegacion from "./components/Navegacion";

import Main from "./Views/Main";
import Footer from "./components/Footer";
import CartProvider from "./Context/ContexCart";
import Cart from "./Views/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
      <CartProvider>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
      </>
  );
}

export default App;
