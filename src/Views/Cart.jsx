import React, { useContext } from "react";
import { CartContext } from "../Context/ContexCart";
import { Button, Card, Container } from "react-bootstrap";

const Cart = () => {
  const { cart,AddCart, decrementHandle, totalCart } = useContext(CartContext);
  return (
    
   
    <Container className="ContainerCart">
      <h2 style={{textAlign:"center", color:"white"}}>Carrito</h2>
      { cart.length === 0 ? (
         <div > 
          <h3 style={{textAlign:"center", color:"black"}}>No hay productos en el carrito</h3>
          </div> 
         )
         
          
          : (
          <Container className="Cart">
           <div> 
           {cart.map((product) => (
            <Card key={product.id} className="cartProduct mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <Card.Img src={product.imagen} alt={product.name} />
                </div>
                <div className="col-md-8">
                  <Card.Body className="cartBody">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    
                    <div className="contador">
                    <Button
                    onClick={() => {
                      AddCart(product);
                    }}
                    >+</Button>
                    <Card.Text>{product.Quantity}</Card.Text>
                    <Button
                      onClick={() => {
                        decrementHandle(product.id);
                      }}
                    >
                      -
                    </Button>
                    </div>
                   
                  </Card.Body>
                </div>
              </div>
            </Card>
          ))}
          </div>
        <Container className="cartTotal d-flex justify-content-center">
          <h4>Total: ${totalCart}</h4>
        </Container>
        </Container>
        )}
   
    </Container> 
    
  );
};

export default Cart;
