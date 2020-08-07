import React, { useState } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { CalculatorDesktop, CalculatorMobile } from '.';
import Loading from './Loading';

smoothScroll.polyfill();

function Calculator({ buttonText, buttonIcon, loading, onAccept }) {
  const [data, setData] = useState({});
  return (
    <div className="calculator">
      <CalculatorDesktop onChange={(data) => console.log('onChange', data)} />
      <CalculatorMobile onChange={(data) => console.log('onChange', data)} />
      <div className="calculator-footer">
        <button
          disabled={loading}
          className="calculator-btn"
          onClick={(e) => {
            e.preventDefault();
            onAccept(data);
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {buttonText}
              {buttonIcon && <img alt="" className="icon-button" src={buttonIcon} />}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Calculator;
