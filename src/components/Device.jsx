import { Card, Button, Image } from 'react-bootstrap'
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';




export default function Device({ device, updateDeviceStatus }) {
    const authContext = useContext(AuthContext);
    const adminAccess = authContext.token === "admin"
    //BIGGEST BUG OH MY GOD
    const toggleStatus = () => {
        const newStatus = device.status === 'Online' ? 'Offline' : 'Online';
        updateDeviceStatus(device.id, newStatus);
    };

    return (
        <Card className="device-card">
            <div className="imgContainer">
                <Image className={device.status === 'Online' ? 'device-img-online' : 'device-img-offline'} variant="top" src={`${device.category}.png`} alt={device.category} roundedCircle />
            </div>
            <Card.Body className="device-info">
                <Card.Title className="card-title" style={{ fontSize: '24px' }}>{device.model}</Card.Title>
                <div className="device-spec">
                    <p><strong>Device:</strong> {device.category}</p>
                    <p><strong>Location</strong>: {device.location}</p>
                    <p><strong>Alerts:</strong> {device.alerts}</p>
                    {/*Makes the status a clickable button to toggle device status. But also making sure only clickable for admin*/}
                    <p>
                        <strong>Status: </strong>
                        {adminAccess ? (
                            <button
                                onClick={toggleStatus}
                                //to enable styling between online and offline buttons
                                className={`status-button ${device.status === 'Online' ? 'online' : 'offline'}`}
                                aria-pressed={device.status === 'Online'}
                            >
                                {device.status}
                            </button>
                        ) : (
                            <span>{device.status}</span>
                        )}
                    </p>
                </div>
            </Card.Body>

        </Card>
    )
}