import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth.jsx";
import { useLocalStorage } from "usehooks-ts";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Container, Navbar, Button } from 'react-bootstrap'



function Layout() {
  return (
    <Container>
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
          <Route path="/" element={<Layout />} />
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

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
