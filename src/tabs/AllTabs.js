import React from 'react';

import { Tab, Tabs } from 'react-bootstrap';
import DataTab from './data/DataTab';
import FrameTab from './frames/FrameTab';
import HomeTab from './home/HomeTab';
import DsdlTab from './dsdl/DsdlTab';
import FrameGenerator from '../emitter/test/FrameGenerator';
import DataGenerator from '../emitter/test/DataGenerator';

function AllTabs() {
  const [frameRows, setFrameRows] = React.useState([]);
  const [dataRows, setDataRows] = React.useState([]);

  // here we will receive frames from the websocket
  React.useEffect(() => {
    let frameGenerator = new FrameGenerator();
    let currentData = [];
    frameGenerator.start();
    let callback = data => {
      currentData = currentData.concat(data);
      setFrameRows(currentData);
    };
    frameGenerator.on('frame', callback);
    return () => frameGenerator.off('frame', callback);
  }, []);

  // here we will receive frames from the websocket
  React.useEffect(() => {
    let dataGenerator = new DataGenerator();
    let currentData = [];
    dataGenerator.start();
    let callback = data => {
      currentData = currentData.concat(data);
      setDataRows(currentData);
    };
    dataGenerator.on('data', callback);
    return () => dataGenerator.off('data', callback);
  }, []);

  return (
    <Tabs
      defaultActiveKey="home"
      unmountOnExit={true}
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="home" title="Home">
        <HomeTab frameRows={frameRows} dataRows={dataRows} />
      </Tab>
      <Tab eventKey="frames" title="Frames">
        <FrameTab frameRows={frameRows} />
      </Tab>
      <Tab eventKey="data" title="Data">
        <DataTab dataRows={dataRows} />
      </Tab>
      <Tab eventKey="dsdl" title="DSDL">
        <DsdlTab dataRows={dataRows} />
      </Tab>
    </Tabs>
  );
}

export default AllTabs;
