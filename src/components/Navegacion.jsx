import { NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar expand="lg" className="Nav">
      <Container fluid>
        <Navbar.Brand style={{ color: "white" }} href="#">
          Earendel Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link style={{ color: "white", paddingRight:"8px", textDecoration:"none"}} to="/">
              Home
            </Link>
            <Link style={{ color: "white", textDecoration:"none" }} href="#action2">
              Link
            </Link>
          </Nav>
           <Container>
           <Form className="d-flex justify-content-center " >
            <Form.Control style={{width:"400px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
           </Container>
          
          <Link style={{textDecoration:"none", color:"white",paddingRight:"25px"}} to="/cart">Carrito </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
