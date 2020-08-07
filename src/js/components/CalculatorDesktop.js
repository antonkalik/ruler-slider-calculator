import React from 'react';
import SliderDesktop from './SliderDesktop';

const CalculatorDesktop = ({ onChange }) => {
  return (
    <div className="calculator-desktop">
      <SliderDesktop
        title="Amount"
        name="amount"
        extension="€"
        min={500}
        max={5000}
        step={100}
        value={2000}
        onChange={onChange}
      />
      <SliderDesktop
        title="Term on"
        name="term"
        extension="days"
        value={20}
        min={1}
        max={30}
        step={1}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(CalculatorDesktop);
