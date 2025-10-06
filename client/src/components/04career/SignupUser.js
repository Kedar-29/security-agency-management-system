import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function SignupUser() {
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setSuccess("");

    const userData = { fullName, whatsapp, dob, password };

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("User registered successfully!");
        setFullName("");
        setWhatsapp("");
        setDob("");
        setPassword("");
        setRePassword("");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      setError("Server error. Please try again.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "28rem" }}>
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          <p className="text-center text-muted">Create a new account</p>

          {error && <p className="text-danger text-center">{error}</p>}
          {success && <p className="text-success text-center">{success}</p>}

          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWhatsapp">
              <Form.Label>WhatsApp Mobile No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter WhatsApp number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRePassword">
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/UserLogin">Login</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
