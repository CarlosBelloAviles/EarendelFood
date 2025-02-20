import React, { useEffect, useState } from "react";
import BreakFastPage from "../Views/BreakFastPage";
import { comidas } from "../assets/Utils/FoodData";
import { Row, Col } from "react-bootstrap";
import Aside from "../components/Aside";
import Header from "../components/Header";

function Main() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {
    if (categoria === "Todas") {
      const AllProduct = comidas.flatMap((comida) => comida.opciones);
      setProductosFiltrados(AllProduct);
    } else {
      const Filtrados = comidas.find((comida) => comida.tipo === categoria);
      setProductosFiltrados(Filtrados ? Filtrados.opciones : []);
    }
  }, [categoria]);
  return (
    <>
      <Header />
      <div className="MenuContainer">
        <Aside onSelectCategoria={setCategoria} />
        <Row className="letterMenu">
          {productosFiltrados.map((opcion) => (
            <Col key={opcion.id} className="pb-4 " xs={12} lg={4} md={6}>
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
    </>
  );
}

export default Main;
