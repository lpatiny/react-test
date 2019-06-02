import React from 'react';
import './App.css';
import './bootstrap.min.css';
import './fullHeight.css';
import { Tab, Tabs } from 'react-bootstrap';
import DataTab from './data/DataTab';
import FrameTab from './frames/FrameTab';

import FrameGenerator from './frames/FrameGenerator';
import DataGenerator from './data/DataGenerator';

function App() {
  const [frameRows, setFrameRows] = React.useState([]);
  const [dataRows, setDataRows] = React.useState([]);

  // here we will receive frames from the websocket
  React.useEffect(() => {
    let frameGenerator = new FrameGenerator();
    frameGenerator.start();
    let callback = data => {
      setFrameRows(frameRows.concat(data));
    };
    frameGenerator.on('frame', callback);
    return () => frameGenerator.off('frame', callback);
  });

  // here we will receive frames from the websocket
  React.useEffect(() => {
    let dataGenerator = new DataGenerator();
    dataGenerator.start();
    let callback = data => {
      setDataRows(dataRows.concat(data));
    };
    dataGenerator.on('data', callback);
    return () => dataGenerator.off('data', callback);
  });

  return (
    <div className="App" style={{ height: '100%' }}>
      <Tabs defaultActiveKey="frames" id="uncontrolled-tab-example">
        <Tab eventKey="frames" title="Frames">
          <FrameTab frameRows={frameRows} />
        </Tab>
        <Tab eventKey="data" title="Data">
          <DataTab dataRows={dataRows} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
