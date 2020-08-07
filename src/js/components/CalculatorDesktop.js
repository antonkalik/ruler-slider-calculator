import React from 'react';
import SliderDesktop from './SliderDesktop';

const CalculatorDesktop = ({ onChange, sliders }) => {
  return (
    <div className="calculator-desktop">
      {Object.keys(sliders).map((name) => {
        const slider = sliders[name];
        return (
          <SliderDesktop
            title="Amount"
            name={name}
            extension={slider.extension}
            min={slider.min}
            max={slider.max}
            step={slider.step}
            value={slider.initValue}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default React.memo(CalculatorDesktop);
