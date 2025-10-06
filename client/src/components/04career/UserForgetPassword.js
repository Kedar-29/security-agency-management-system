import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function UserForgetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Password reset link sent to", email);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "24rem" }}>
        <Card.Body>
          <h2 className="text-center">Forgot Password</h2>
          <p className="text-center text-muted">Enter your email to reset your password</p>
          
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" className="w-100" onClick={handleReset}>
              Send Reset Link
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
