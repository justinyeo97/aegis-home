import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Outlet, useNavigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth.jsx";
import { useLocalStorage } from "usehooks-ts";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Container, Navbar, Button, Nav, NavDropdown } from 'react-bootstrap'
import './App.css'

//Layout to standardize Nav Bar across pages
function Layout() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.token ? true : false

  function handleLogOut() {
    authContext.setToken(null)
    navigate('/login');
  }

  //to ensure background image fills the screen but remains static.
  const bgStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(/background-image.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    backgroundSize: '100% auto',
    fontFamily: '"Orbitron", sans-serif',
  };

  //to ensure footer sticks to the bottom on short sites.
  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={bgStyle}>
      <Container style={contentStyle}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/"><img
              alt=""
              src="/igis-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}iGis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              </Nav>
              {isLoggedIn && (
                <Nav>
                  < Nav.Link onClick={handleLogOut} role="button">Log Out</Nav.Link>
                </Nav>)}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </Container>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#222',
        color: '#fff',
        marginTop: '2rem',
      }}>
        &copy; 2026 i-Gis Home. All rights reserved.
      </footer>
    </div>
  )
}


export default function App() {
  const [token, setToken] = useLocalStorage("token", null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
              path="dashboard"
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
