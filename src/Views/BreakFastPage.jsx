import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BreakFastPage(props) {
  return (
    <Card className='Card' >
      <div className='Box'>
    <Card.Img variant="top" style={{ borderTopRightRadius:'16px', borderTopLeftRadius:'16px'}} src={props.imagen}  className='img'/>
    <Card.Body className='cardBody'>
     
      <Card.Title className='title'>{props.name}</Card.Title>
      <Card.Text className='text'>{props.desc} </Card.Text>
      <Card.Text className='text'>{props.price} </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </div>
  </Card>
  )
}

export default BreakFastPage