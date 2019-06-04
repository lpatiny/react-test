import React from 'react';

import { Card } from 'react-bootstrap';

function ListNodes(props) {
  const [sources, setSources] = React.useState([]);
  React.useEffect(() => {
    // get the last hour of frames
    if (!props.frameRows) return;
    let newSoures = {};
    props.frameRows.forEach(
      frame => (newSoures[frame.sourceNodeID] = frame.epoch)
    );
    setSources(newSoures);
  }, [props.frameRows]);
  let now = Date.now() - 1000;
  return (
    <Card bg="info" text="light" border="info">
      <Card.Body>
        <Card.Title>List of nodes</Card.Title>
        <Card.Text
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '2em'
          }}
        >
          {Object.keys(sources).map(key => {
            return sources[key] >= now ? (
              <span key={key}>{key} </span>
            ) : (
              <span key={key} style={{ opacity: 0.2 }}>
                {key}{' '}
              </span>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ListNodes;
