import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { registerSchema } from "../schemas/userSchema.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  // Estados para el formulario y mensajes de error
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    // Actualizar el estado de los inputs
    setForm((prev) => ({ ...prev, [name]: value }));
    //  Limpiar el mensaje de error
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    const result = registerSchema.safeParse(form);

    // Si no es exitoso, se muestran los errores en el mensaje de error
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      setMessage({ type: "error", text: "Error en el formulario" });
      return;
    }

    // Si es exitoso, se muestra el mensaje de éxito , se limpia el formulario y  los errores
    setErrors({});
    setMessage({ type: "success", text: "Cuenta iniciada correctamente" });
    setForm({ username: "", email: "", password: "" });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-start vh-100 pt-5"
    >
      <Form onSubmit={handleSubmit} className=" p-4 border rounded w-50  ">
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={form.username}
            placeholder="Enter usuario"
            onChange={handleChangeInput}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter email"
            onChange={handleChangeInput}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleChangeInput}
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </Form.Group>
        {message && (
          <div
            className={`text-center mb-3 fw-semibold ${
              message.type === "success" ? "text-success" : "text-danger"
            }`}
          >
            {message.text}
          </div>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>

        <p className="text-center mt-3">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
