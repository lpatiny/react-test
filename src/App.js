import React from 'react';
import './App.css';
import './bootstrap.min.css';
import './fullHeight.css';
import { Tab, Tabs } from 'react-bootstrap';
import DataTab from './data/DataTab';
import FrameTab from './frames/FrameTab';

function App() {
  const [frameRows, setFrameRows] = React.useState([]);
  const [dataRows, setDataRows] = React.useState([]);

  // here we will receive data from the websocket
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFrameRows(frameRows.concat({
        make: 'Porsche',
        model: 'Boxter',
        price: Math.floor(Math.random() * 1000),
        id: window.performance.now()
      }));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App" style={{ height: '100%' }}>
      <Tabs defaultActiveKey="frames" id="uncontrolled-tab-example">
        <Tab eventKey="frames" title="Frames">
          <FrameTab frameRows={frameRows} />
        </Tab>
        <Tab eventKey="data" title="Data">
          <DataTab />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
