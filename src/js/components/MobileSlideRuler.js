import React from 'react';
import Wheel from './Wheel';

function MobileSlideRuler({ title, min, max, step, initValue, currencySymbol, onChange, name }) {
  return (
    <div className="mobile-slide-ruler">
      <p className="title">{title}</p>
      <Wheel
        name={name}
        initValue={initValue}
        min={min}
        max={max}
        step={step}
        currencySymbol={currencySymbol}
        onChange={onChange}
      />
    </div>
  );
}

export default React.memo(MobileSlideRuler);
