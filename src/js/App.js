import React from 'react';
import { Calculator } from './components';

function App() {
  return (
    <div className="app">
      <Calculator
        buttonText="Accept"
        onAccept={(data) => {
          console.log('onAccept', data);
        }}
        onChange={(data) => {
          console.log('onChange', data);
        }}
        sliders={{
          amount: {
            min: 100,
            max: 5000,
            step: 100,
            initValue: 700,
            extension: '€',
            title: 'Amount',
          },
          term: {
            min: 1,
            max: 30,
            step: 1,
            initValue: 15,
            extension: 'days',
            title: 'Term on',
          },
        }}
      />
    </div>
  );
}

export default App;
