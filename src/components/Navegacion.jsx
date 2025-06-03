import { NavLink } from "react-bootstrap";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { CartContext } from "../Context/ContexCart";
import logo from '../assets/earendel-logo.svg';


const Navegacion = () => {
  const { cart } = useContext(CartContext);
  return (
    
    <Navbar expand="lg" className="Nav">
      <Container fluid className="containerNav p-4" >
        <Navbar.Brand as={Link} to="/" style={{ color: "white" }} >
          <img src={logo} alt="Earendel Food Logo"  />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="Link"  to="/ofertas">
              Ofertas
            </Link>
            <Link className="Link"  href="#action2">
              Eventos
            </Link>
          </Nav>
           <Container>
           <Form className="d-flex justify-content-center " >
            <Form.Control style={{width:"350px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
           </Container>
           <Link className="Link"  to="/register"> Registrarse</Link>
         <Link className="LinkCart" to="/cart"><RiShoppingCartFill size={24} /> {cart.length}</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
};

export default Navegacion;
