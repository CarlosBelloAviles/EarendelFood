import React, { useEffect, useState } from "react";
import BreakFastPage from "../Views/BreakFastPage";
import { comidas } from "../assets/Utils/FoodData";
import { Container, Row, Col } from "react-bootstrap";
import Aside from "../components/Aside";

function Main() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState("Desayuno");

  useEffect(() => {
    const Filtrados = comidas.find((comida) => comida.tipo === categoria);
    setProductosFiltrados(Filtrados ? Filtrados.opciones : []);
  }, [categoria]);
  return (
    <div className="MenuContainer">
      <Aside onSelectCategoria={setCategoria} />
      <Row style={{ display: "flex", padding:"20px", width:"80%"}}>
        {productosFiltrados.map((opcion) => (
          <Col key={opcion.id}  className="pb-4 " xs={12} lg={4} md={6}>
            <BreakFastPage
              id={opcion.id}
              name={opcion.nombre}
              imagen={opcion.img}
              desc={opcion.desc}
              price={opcion.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Main;
