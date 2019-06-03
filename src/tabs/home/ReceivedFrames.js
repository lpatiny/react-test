import React from 'react';

import { Card } from 'react-bootstrap';

function ReceivedFrames(props) {
  return (
    <Card bg="info" text="light" border="info">
      <Card.Body>
        <Card.Title>Received frames</Card.Title>
        <Card.Text style={{ fontSize: '2em' }}>{props.value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReceivedFrames;
