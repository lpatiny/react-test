import React from 'react';

import { Card } from 'react-bootstrap';

function ReceivedData(props) {
  return (
    <Card bg="info" text="light" border="info">
      <Card.Body>
        <Card.Title>Received data</Card.Title>
        <Card.Text style={{ fontSize: '2em' }}>{props.value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReceivedData;
