import React from 'react';

function DisplayBoolean(props) {
  let value = props.value;
  if (value === undefined) return '';
  if (value) return <span style={{ color: 'green' }}>✔︎</span>;
  return <span style={{ color: 'red' }}>✘</span>;
}

export default DisplayBoolean;
