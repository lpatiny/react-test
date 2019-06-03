import React from 'react';

import { Card } from 'react-bootstrap';

function ListNodes(props) {
  return (
    <Card bg="info" text="light" border="info">
      <Card.Body>
        <Card.Title>List of nodes</Card.Title>
        <Card.Text style={{ fontSize: '2em' }}>
          {props.value.join(' ')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ListNodes;
