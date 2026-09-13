import { Card, Button, Image } from 'react-bootstrap'
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';




export default function Device({ device }) {
    console.log('Token:,authContext.token')
    const authContext = useContext(AuthContext);
    const adminAccess = authContext.token === "admin"
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
            {adminAccess && (<Button>Activate</Button>)}
        </Card>
    )
}