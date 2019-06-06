import React from 'react';

import DsdlGrid from './DsdlGrid';
import { dataTypes } from 'uavcan/src/data/DataTypesManager';
import ObjectInspector from 'react-object-inspector';
import DsdlDescription from './info/DsdlDescription';

let dsdlRows = Object.values(dataTypes);
dsdlRows.sort((a, b) => {
  console.log(a.kind);
  if (a.type < b.type) return -1;
  if (a.type > b.type) return 1;
  console.log(a.type, b.type, a.info.dataTypeID, b.info.dataTypeID);
  if (a.info.dataTypeID === undefined && b.info.dataTypeID) return -1;
  if (b.info.dataTypeID === undefined && a.info.dataTypeID) return 1;
  if (a.info.dataTypeID === undefined && b.info.dataTypeID === undefined) {
    if (a.id > b.id) return 1;
    return -1;
  }
  return a.info.dataTypeID - b.info.dataTypeID;
});
console.log(dsdlRows);

function DsdlTab() {
  const [currentRow, setCurrentRow] = React.useState({});

  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    flexGrow: 1,
    height: '100%',
    minHeight: '100%'
  };

  return (
    <div style={style}>
      <DsdlGrid dsdlRows={dsdlRows} setCurrentRow={setCurrentRow} />

      <div style={{ width: '300px', textAlign: 'left' }}>
        <DsdlDescription value={currentRow.description} />
      </div>
    </div>
  );
}

export default DsdlTab;
