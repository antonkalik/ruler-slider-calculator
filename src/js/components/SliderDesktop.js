import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function SliderDesktop({
  step = 1,
  min = 0,
  max = 100,
  onChange,
  value,
  title,
  extension = '€',
  name,
}) {
  const amountOnClick = (e) => console.log(e);

  return (
    <div className="slider-desktop">
      <div className="head">
        <h5 className="title">{title}</h5>
        <div onClick={amountOnClick} className="value">
          <h3>
            {value} {extension}
          </h3>
        </div>
      </div>
      <RCSlider
        min={min}
        step={step}
        onChange={(newValue) => {
          onChange({ value: newValue, name });
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
