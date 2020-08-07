import React, { useState } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SliderDesktop({
  step = 1,
  min = 0,
  max = 100,
  onChange,
  initValue,
  title,
  extension = '€',
  name,
}) {
  const [value, setValue] = useState(initValue);

  return (
    <div className="slider-desktop">
      <div className="head">
        <h5 className="title">{title}</h5>
        <h3 className="value">
          {value} {extension}
        </h3>
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
        <p className="min">
          {min} {extension}
        </p>
        <p className="max">
          {max} {extension}
        </p>
      </div>
    </div>
  );
}
