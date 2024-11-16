import React, { useContext } from "react";
import { CartContext } from "../Context/ContexCart";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  const { cart, decrementHandle, total } = useContext(CartContext);
  return (
    <Container className="ContainerCart">
      <h2>carrito</h2>
      <Container className="Cart">
        <div>
          {cart.map((product) => (
            <Card className="cartProduct mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <Card.Img src={product.imagen} alt={product.name} />
                </div>
                <div className="col-md-8">
                  <Card.Body className="cartBody">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text>{product.Quantity}</Card.Text>
                    <Button
                      onClick={() => {
                        decrementHandle(product.id);
                      }}
                    >
                      -
                    </Button>
                  </Card.Body>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Container className="cartTotal d-flex justify-content-center">
          <h4>Total: {total}</h4>
        </Container>
      </Container>
    </Container>
  );
};

export default Cart;
