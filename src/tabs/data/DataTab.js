import React from 'react';

import DataGrid from './DataGrid';
import ObjectInspector from 'react-object-inspector';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  flexGrow: 1,
  height: '100%',
  minHeight: '100%'
};

function DataTab(props) {
  const [currentRow, setCurrentRow] = React.useState({});
  return (
    <div style={style}>
      <DataGrid frameRows={props.dataRows} setCurrentRow={setCurrentRow} />
      <div style={{ width: '300px', textAlign: 'left' }}>
        <ObjectInspector
          name="Frame"
          data={currentRow}
          initialExpandedPaths={['*']}
        />
      </div>
    </div>
  );
}

export default DataTab;
