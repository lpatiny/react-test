import React from 'react';

import { Card } from 'react-bootstrap';

function ReceivedData(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Received data</Card.Title>
        <Card.Text>{props.value}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReceivedData;
