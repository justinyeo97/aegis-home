import { Card, Button, Image } from 'react-bootstrap'



export default function Device({ device }) {
    return (
        <Card className="device-card">
            <div className="imgContainer">
                <Image className={device.status === 'Online' ? 'device-img-online' : 'device-img-offline'} variant="top" src={`${device.category}.png`} alt={device.category} roundedCircle />
            </div>
            <Card.Body className="device-info">
                <Card.Title>{device.model}</Card.Title>
                <p><strong>Device:</strong> {device.category}</p>
                <p><strong>Location</strong>: {device.location}</p>
                <p><strong>Alerts:</strong> {device.alerts}</p>
                <p><strong>Status:</strong> {device.status}</p>
            </Card.Body>
            <Button>Activate</Button>
        </Card>
    )
}