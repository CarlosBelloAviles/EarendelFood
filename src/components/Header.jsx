import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
const Header = () => {
  return (
   
    <Carousel  data-bs-theme="dark" className="w-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/foodheader.png"
          alt="First slide"
          style={{ height: "380px" }}
        />
        <Carousel.Caption>
          <div className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/headerestaurant.jpg"
          alt="Second slide"
          style={{ height: "380px" }}
        />
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/headerlicores.png"
          alt="Third slide"
          style={{ height: "380px", width: "440px" }}
        />
        <Carousel.Caption>
          <div className="caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
};

export default Header;
