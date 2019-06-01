import React from 'react';
import './App.css';
import './bootstrap.min.css';
import './fullHeight.css';
import { Tab, Tabs } from 'react-bootstrap';
import DataTab from './data/DataTab';
import FrameTab from './frames/FrameTab';

function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
      <Tabs defaultActiveKey="frames" id="uncontrolled-tab-example">
        <Tab eventKey="frames" title="Frames">
          <FrameTab />
        </Tab>
        <Tab eventKey="data" title="Data">
          <DataTab />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
