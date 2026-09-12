import { Container, Row, Col, Card } from "react-bootstrap";
import Device from "../components/device";
import data from '../devices.json'
import Info from '../components/Info.jsx'

export default function Dashboard() {
  return (
    <Container>
      <h1 className="my-3">Dashboard</h1>
      <br />

      <Container>
        <Info devices={data.devices} />
        <br />
        <Row className="g-3">
          {data.devices.map(device => (
            <Col md={4} lg={4} key={device.id}>
              <Device device={device} />
            </Col>
          ))}
        </Row>
      </Container>

    </Container>
  );
}
