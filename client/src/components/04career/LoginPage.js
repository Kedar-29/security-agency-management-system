import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "24rem" }}>
        <Card.Body>
          <h2 className="text-center">Login</h2>
          <p className="text-center text-muted">Welcome back! Please enter your details.</p>
          
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between mb-3">
            <Link as={Link} to="/UserForgetpass">Forget password</Link>
              <Link as={Link} to="/UserSignup">Sign up</Link>
            </div>

            <Button  className="w-100" onClick={handleLogin}>
            <Link as={Link} to="/UserDashboard">Login</Link>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
