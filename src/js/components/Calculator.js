import React from 'react';
import { CalculatorDesktop, CalculatorMobile } from '.';

function Calculator() {
  return (
    <div className="calculator">
      <CalculatorDesktop title="Some title" buttonText="Go to " />
      <CalculatorMobile title="Some title" buttonText="Go to " />
    </div>
  );
}

export default Calculator;
