import "./App.css";
import Navegacion from "./components/Navegacion";
import Main from "./Views/Main";
import Footer from "./components/Footer";
import { CartProvider } from "./Context/ContexCart";
import Cart from "./Views/Cart";
import { Route, Routes } from "react-router-dom";
import Register from "./Views/Register";




function App() {
  return (
   <div className="min-vh-100 vw-100">
      <CartProvider>
       <Navegacion />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
       </CartProvider>
      </div>
  );
}

export default App;
