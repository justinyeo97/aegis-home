import { Container, Row, Col, Card } from "react-bootstrap";
import Device from "../components/device";
import data from '../devices.json'
import Info from '../components/Info.jsx'
import { useState } from 'react';

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredDevices = data.devices.filter(device => {
    const statusMatch = statusFilter === 'all' || device.status === statusFilter;
    const typeMatch = typeFilter === 'all' || device.category === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <Container>
      <h1 className="my-3">Dashboard</h1>

      <Container>
        <Info devices={filteredDevices} />
        <br />
        <div className="filters" style={{ marginBottom: '15px' }}>

          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('Online'); setTypeFilter('all'); }}>Online</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('Offline'); setTypeFilter('all'); }}>Offline</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('all'); setTypeFilter('Camera'); }}>Camera</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('all'); setTypeFilter('Sensor'); }}>Sensor</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('all'); setTypeFilter('Smoke Detector'); }}>Smoke Detector</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('all'); setTypeFilter('Keypad'); }}>Keypad</button>
          <button className="btn btn-primary filter" onClick={() => { setStatusFilter('all'); setTypeFilter('all'); }}>Reset</button>
        </div>

        <Row className="g-3">
          {filteredDevices.map(device => (
            <Col md={4} lg={4} key={device.id}>
              <Device device={device} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
