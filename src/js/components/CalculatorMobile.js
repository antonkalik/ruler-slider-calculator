import React from 'react';
import MobileSlideRuler from './MobileSlideRuler';
import Button from './Button';

export default function CalculatorMobile({ buttonText = 'Aceptar', onAccept }) {
  return (
    <div className="calculator-mobile">
      <MobileSlideRuler
        name="amount"
        value={2000}
        min={500}
        max={5000}
        step={100}
        currencySymbol="€"
        title="Cantidad hasta ___ €"
        onChange={(data) => console.log(data)}
      />
      <MobileSlideRuler
        name="term"
        value={7}
        min={1}
        max={30}
        step={1}
        currencySymbol="Días"
        title="Plazo hasta ___ días"
        onChange={(data) => console.log(data)}
      />
      <div className="footer-mobile-calculator">
        <Button text={buttonText} onClick={onAccept} />
      </div>
    </div>
  );
}
