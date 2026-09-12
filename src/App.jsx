import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from "react-router-dom";
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
    navigate('/');
  }


  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">i-Gis Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
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
            <Route path="/login" element={<Login />} />
            <Route
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
              path="/dashboard"
            />
            <Route path="/*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
