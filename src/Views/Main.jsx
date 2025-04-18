import React, { useEffect, useState } from "react";
import { comidas } from "../assets/Utils/FoodData";
import { Row, Col, Container, } from "react-bootstrap";
import Aside from "../components/Aside";
import Header from "../components/Header";
import LetterMenu from "./LetterMenu";

function Main() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState("Desayuno");

  useEffect(() => {
    /* if (categoria === "Todas") {
      const AllProduct = comidas.flatMap((comida) => comida.opciones);
      setProductosFiltrados(AllProduct); */
    
      const Filtrados = comidas.find((comida) => comida.tipo === categoria);
      setProductosFiltrados(Filtrados ? Filtrados.opciones : []);
    
  }, [categoria]);
  return (
    <div className="Container">
      <Header />
      <div className="MenuContainer">
        <Aside onSelectCategoria={setCategoria} />
        <Row className="letterMenu" xs={1} lg={3} md={2}>
          {productosFiltrados.map((producto) => (
            <Col key={producto.id} className="menuCard pb-4 "  >
              <LetterMenu
                id={producto.id}
                name={producto.nombre}
                imagen={producto.img}
                desc={producto.desc}
                price={producto.price}
              />
           </Col>
          ))}
       </Row>
      </div>
    </div>
  );
}

export default Main;
