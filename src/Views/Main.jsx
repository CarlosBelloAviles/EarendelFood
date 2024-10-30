import React, { useEffect, useState } from 'react'
import BreakFastPage from '../Views/BreakFastPage'
import { comidas } from '../assets/Utils/FoodData'
import  {Container, Row, Col} from 'react-bootstrap';



function Main({categoria}) {
 const [productosFiltrados, setProductosFiltrados]= useState([])


 
  useEffect(()=>{
    const Filtrados = comidas.find(comida => comida.tipo === categoria)
  setProductosFiltrados(Filtrados ? Filtrados.opciones : [])
  } ,[categoria])
  return (
    <div className='Main'>
      
           
      <div>
      <Container  >
          <Row style={{display:'flex', flexWrap:'wrap'}} >
      { productosFiltrados.map((opcion) =>(
         <Col key={opcion.id}  className='pb-5 '  xs={12} lg={4} md={6} >
        < BreakFastPage
        
        name={opcion.nombre}
        imagen={opcion.img}
        desc={opcion.desc}
        price={opcion.price}
        />
       </Col>
      ))}
     
     </Row>
        </Container>
      

    </div>
      
       
    </div>
  )
}

export default Main