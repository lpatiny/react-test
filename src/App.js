import React from 'react';
import './bootstrap.min.css';

import './custom.css';

import AllTabs from './tabs/AllTabs';

function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
      <AllTabs />
    </div>
  );
}

export default App;
