import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Aside from "../components/Aside";
import Header from "../components/Header";
import LetterMenu from "./LetterMenu";
import axios from "axios";
import { getPublicUrl } from "../utils/imageHelper";

function Main() {
 
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState("Desayuno");

  

  useEffect(() => {
    const dataFetch = async () => { 
      try{
        // Simulando una llamada a la API para obtener los productos
        const response = await axios.get(getPublicUrl("/data/FoodData.json"));
        const { comidas } =  response.data;
       
        if( !comidas ) {
          throw new Error("Error en la solicitud a la API");
        }
        
      // Filtrar los productos según la categoría seleccionada
        const Filtrados = comidas.find((comida) => comida.tipo === categoria);
        setProductosFiltrados(Filtrados ? Filtrados.opciones : []); 
        
      }catch(error){
         console.error("Error al filtrar los productos:", error);
         setProductosFiltrados([]);
      }
     };

    dataFetch()
   }, [categoria]);
  
   return (
    <>
     <Header />
      <Row className="MenuContainer">
       <Col xs={12} md={2} className="p-0">
        <Aside onSelectCategoria={setCategoria} />
       </Col>
       <Col xs={12} md={10} className="P-0">
        <Row className="letterMenu" xs={1} lg={3} md={2}>
          {productosFiltrados.length > 0 && productosFiltrados.map((producto) => (
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
        </Col>
      </Row>
     
    </>
  );
}

export default Main;
