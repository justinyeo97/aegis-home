import { Card, Button, Image, Stack, CardBody, Col, Container, Row } from 'react-bootstrap'
import data from '../devices.json'

export default function Info({devices}) {
const onlineCount = devices.filter(device => device.status === 'Online').length;
const offlineCount = devices.filter(device => device.status === 'Offline').length;
const alertCount = devices.filter(device => device.alerts).length;

    return (
        <Row className="kpi-row g-1 mx-0">
            <Col className="kpi" >
                <Card className="kpi-card w-100">
                    <Card.Body><h3>Online:{onlineCount}</h3></Card.Body>
                </Card>
            </Col>
            <Col className="kpi" >
                <Card className="kpi-card w-100">
                    <Card.Body><h3>Offline:{offlineCount}</h3></Card.Body>
                </Card>
            </Col>
            <Col className="kpi" >
                <Card className="kpi-card w-100">
                    <Card.Body><h3>Alerts:{alertCount}</h3></Card.Body>
                </Card>
            </Col>
        </Row>

    )
}