import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foodheader from "../assets/img/foodheader.png";
import headerestaurant from "../assets/img/headerestaurant.jpg";
import headerlicores from "../assets/img/headerlicores.png";
const Header = () => {
  return (
    <Carousel data-bs-theme="dark" className="Header">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foodheader}
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
          src={headerestaurant}
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
          src={headerlicores}
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
