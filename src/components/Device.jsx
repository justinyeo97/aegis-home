import {Card, Button} from 'react-bootstrap'



export default function Device({ device }) {
  return (
    <Card>
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