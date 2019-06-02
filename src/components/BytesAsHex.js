import React from 'react';

function BytesAsHex(props) {
  let value = props.value;
  if (!Array.isArray(value)) return '';
  return value
    .map(byte =>
      byte
        .toString(16)
        .toUpperCase()
        .padStart(2, '0')
    )
    .join(' ');
}

export default BytesAsHex;
