import React, { useState } from 'react';
import Wheel from './Wheel';

export default function MobileSlideRuler({ title, extension, initValue, onChange, ...rest }) {
  const [value, setValue] = useState(initValue);

  return (
    <div className="mobile-slide-ruler">
      <p className="title">
        {title}: {value} {extension}
      </p>
      <Wheel
        initValue={initValue}
        extension={extension}
        onChange={(data) => {
          setValue(data.value);
          onChange(data);
        }}
        {...rest}
      />
    </div>
  );
}
