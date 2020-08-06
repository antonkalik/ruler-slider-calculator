import React from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { CalculatorDesktop, CalculatorMobile } from '.';

smoothScroll.polyfill();

function Calculator() {
  return (
    <div className="calculator">
      <CalculatorDesktop title="Some title" buttonText="Go to " />
      <CalculatorMobile title="Some title" buttonText="Go to " />
    </div>
  );
}

export default Calculator;
