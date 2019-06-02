import React from 'react';

import DataGrid from './DataGrid';
import PrintJSON from '../components/PrintJSON';

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
      <div style={{ width: '200px', textAlign: 'left' }}>
        <PrintJSON value={currentRow} />
      </div>
    </div>
  );
}

export default DataTab;
