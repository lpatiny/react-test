import React from 'react';

import FrameGrid from './FrameGrid';
import PrintJSON from '../components/PrintJSON';
import ObjectInspector from 'react-object-inspector';

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  flexGrow: 1,
  height: '100%',
  minHeight: '100%'
};

function FrameTab(props) {
  const [currentRow, setCurrentRow] = React.useState({});
  return (
    <div style={style}>
      <FrameGrid frameRows={props.frameRows} setCurrentRow={setCurrentRow} />
      <div style={{ width: '200px', textAlign: 'left' }}>
        <ObjectInspector
          name="Frame"
          data={currentRow}
          initialExpandedPaths={['*']}
        />
      </div>
    </div>
  );
}

export default FrameTab;
