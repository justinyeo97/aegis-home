import { Card, Button, Image, Stack, CardBody, Col, Container, Row } from 'react-bootstrap'


export default function Info({devices}) {
const onlineCount = devices.filter(device => device.status === 'Online').length;
const offlineCount = devices.filter(device => device.status === 'Offline').length;
const alertCount = devices.filter(device => device.alerts).length;

    return (
        <Row className="kpi-row g-1 mx-0 justify-content-center">
            <Col className="kpi" >
                <Card className="kpi-card online w-100">
                    <Card.Body><h4>Online: {onlineCount}</h4></Card.Body>
                </Card>
            </Col>
            <Col className="kpi" >
                <Card className="kpi-card offline w-100">
                    <Card.Body><h4>Offline: {offlineCount}</h4></Card.Body>
                </Card>
            </Col>
            <Col className="kpi" >
                <Card className="kpi-card alerts w-100">
                    <Card.Body><h4>Alerts: {alertCount}</h4></Card.Body>
                </Card>
            </Col>
        </Row>

    )
}