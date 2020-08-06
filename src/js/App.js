import React from 'react';
import { Calculator } from './components';

function App() {
  const data = 'somedata';
  return (
    <div className="app">
      <Calculator data={data} />
    </div>
  );
}

export default App;
