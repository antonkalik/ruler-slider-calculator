import React, { useState } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

let timer = null;
export default function SliderDesktop({
  step = 1,
  min = 0,
  max = 100,
  onChange,
  value: initValue,
  title,
  extension = '€',
  name,
}) {
  const [value, setValue] = useState(initValue);

  return (
    <div className="slider-desktop">
      <div className="head">
        <h5 className="title">{title}</h5>
        <div className="value">
          <h3>
            {value} {extension}
          </h3>
        </div>
      </div>
      <RCSlider
        min={min}
        step={step}
        onAfterChange={(newValue) => {
          onChange({ value: newValue, name });
        }}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        defaultValue={value}
        max={max}
      />
      <div className="bottom">
        <div className="min">
          <p className="text-small">
            {min} {extension}
          </p>
        </div>
        <div className="max">
          <p className="text-small">
            {max} {extension}
          </p>
        </div>
      </div>
    </div>
  );
}
