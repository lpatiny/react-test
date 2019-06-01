import React from 'react';

import FrameGrid from './FrameGrid';
import FrameInfo from './FrameInfo';
import PrintJSON from '../components/PrintJSON';

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
      <FrameGrid setCurrentRow={setCurrentRow} />
      <PrintJSON value={currentRow} />
    </div>
  );
}

export default FrameTab;
