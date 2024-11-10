import React, { useContext } from "react";
import { CartContext } from "../Context/ContexCart";
import { Card, Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container className="ContainerCart">
      <h2>carrito</h2>
      <Row className="Cart" xs={12} lg={4} md={6}>
        {cart.map((product) => (
          <Card style={{ width: "350px" }} key={product.id}>
            <Card.Img
              style={{ width: "auto", padding: "10px", borderRadius: "10%" }}
              src={product.imagen}
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>
              Cantidad:<span>{product.Quantity}</span>
            </p>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
