import { Card, Button, Image } from 'react-bootstrap'
import '../App.css'



export default function Device({ device }) {
    return (
        <Card className="device-card">
            <Image rounded variant="top" src={`${device.category}.png`} alt={device.category} />
            <Card.Body>
                <Card.Title>{device.model}</Card.Title>
                <p>{device.category}</p>
                <p>{device.location}</p>
                <p>{device.status}</p>
            </Card.Body>
            <Button>Activate</Button>
        </Card>
    )
}