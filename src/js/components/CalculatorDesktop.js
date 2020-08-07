import React from 'react';
import SliderDesktop from './SliderDesktop';

export default function CalculatorDesktop({ onChange, sliders }) {
  return (
    <div className="calculator-desktop">
      {Object.keys(sliders).map((name) => {
        const slider = sliders[name];
        return (
          <SliderDesktop
            key={name}
            title="Amount"
            name={name}
            extension={slider.extension}
            min={slider.min}
            max={slider.max}
            step={slider.step}
            initValue={slider.initValue}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}
