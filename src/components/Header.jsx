import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foodheader from "../assets/img/foodheader.jpg";
import restaurantheader from "../assets/img/restaurantheader.jpg";
import chefs from "../assets/img/chefs.jpg";
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
          <div
            className="caption"
            style={{
              border: "2px solid #fafafa10",
              height: "120px",
              margin: "0 auto",
              background: "#fafafa10",
              backdropFilter: "blur(0.4rem)",
            }}
          >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={restaurantheader}
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
          <div
            className="caption"
            style={{
              border: "2px solid #fafafa10",
              height: "120px",
              margin: "0 auto",
              background: "#fafafa10",
              backdropFilter: "blur(0.4rem)",
            }}
          >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chefs}
          alt="Third slide"
          style={{ height: "380px", width: "440px" }}
        />
        <Carousel.Caption>
          <div
            className="caption"
            style={{
              border: "2px solid #fafafa10",
              height: "120px",
              margin: "0 auto",
              background: "#fafafa10",
              backdropFilter: "blur(0.4rem)",
            }}
          >
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
