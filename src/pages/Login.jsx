import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        if (username === "admin" && password === "password") {
            authContext.setToken("admin");
            navigate("/dashboard");
        } else if (username === "guest" && password === "password") {
            authContext.setToken("guest");
            navigate("/dashboard");
        } else {
            alert("Invalid Username or Password");
        }
    }
    return (
        <Container>
            <div className="login-form">
                <h1 className="my-3">Login</h1>
                {/*LOGIN FORM */}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            hint: admin/guest : password
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={login}>Login</Button>
                </Form>
                  </div >
        </Container>
    );
}
