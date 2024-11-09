import React, { useContext } from 'react'
import { CartContext } from '../Context/ContexCart'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Cart = () => {
    const {cart} = useContext(CartContext);
  return (
    <Container className='ContainerCart'>
     
    <h2>carrito</h2>
    <Row className='Cart' >
       
     { cart.map(product => (
         <Col xs={12} lg={4} md={6} >
       <Card key={product.id}>
         <Card.Img src={product.imagen}/>
         <h4>{product.name}</h4>
         <p>{product.price}</p>
         <p>Cantidad:<span>{product.Quantity}</span></p>
       </Card> 
       </Col>
       ))}
       
    </Row>
    
    </Container>
    
  )
 
}

export default Cart