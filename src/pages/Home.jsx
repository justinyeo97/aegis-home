import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Container className="home-page">
      <img alt="logo" src="/igis-logo.png" className="logo"
        onClick={goToDashboard}
        style={{ cursor: 'pointer' }} />
    </Container>
  );
}
