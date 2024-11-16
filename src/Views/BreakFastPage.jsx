import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../Context/ContexCart";

function BreakFastPage(props) {
  const { AddCart } = useContext(CartContext);
  return (
    <Card className="Card">
      <Card.Img
        variant="top"
        style={{ borderTopRightRadius: "16px", borderTopLeftRadius: "16px" }}
        src={props.imagen}
        className="img"
      />
      <Card.Body className="cardBody">
        <Card.Title className="title">{props.name}</Card.Title>
        <Card.Text className="text">{props.desc} </Card.Text>
        <Card.Text className="text">$ {props.price} </Card.Text>
        <Button onClick={() => AddCart(props)} className="cardBoton">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BreakFastPage;
