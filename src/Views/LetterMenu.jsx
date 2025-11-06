import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../Context/ContexCart";
import { getImageUrl } from "../utils/imageHelper";


function LetterMenu(product) {
  const { AddCart } = useContext(CartContext);
  return (
    <Card className="Card rounded-3">
      <Card.Img
        variant="top"
        src={getImageUrl(product.imagen)}
        className="img rounded-top-3"
      />
      <Card.Body className="cardBody rounded-bottom-3">
        <Card.Title className="title text-info fw-bolder">{product.name}</Card.Title>
        <Card.Text className="descrpcion text-white">{product.desc} </Card.Text>
        <Card.Text className="text-white">$ {product.price} </Card.Text>
        <Button onClick={() => AddCart(product)} className=" btn btn-primary custom-hover ">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LetterMenu;
