import React from 'react';
import Wheel from './Wheel';

export default function MobileSlideRuler({ title, ...rest }) {

  return (
    <div className="mobile-slide-ruler">
      <p className="title">{title}</p>
      <Wheel {...rest} />
    </div>
  );
}
