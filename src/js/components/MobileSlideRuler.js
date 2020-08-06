import React from 'react';
import Wheel from './Wheel';

export default function MobileSlideRuler({
  title,
  min,
  max,
  step,
  value,
  currencySymbol,
  onChange,
  name,
}) {
  return (
    <div className="mobile-slide-ruler">
      <p className="title">{title}</p>
      <Wheel
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        currencySymbol={currencySymbol}
        onChange={onChange}
      />
    </div>
  );
}
