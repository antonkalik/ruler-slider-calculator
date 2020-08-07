import React from 'react';
import { Calculator } from './components';

function App() {
  return (
    <div className="app">
      <Calculator
        buttonText="Accept"
        onAccept={(data) => {
          console.log('onAccept data:', data);
        }}
      />
    </div>
  );
}

export default App;
