import React from 'react';

function PrintJSON(props) {
  return <pre>{JSON.stringify(props.value, undefined, 2)}</pre>;
}

export default PrintJSON;
