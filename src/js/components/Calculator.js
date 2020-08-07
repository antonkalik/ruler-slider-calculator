import React, { useState } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import { CalculatorDesktop, CalculatorMobile } from '.';
import Loading from './Loading';

smoothScroll.polyfill();

function Calculator({ buttonText, buttonIcon, loading, onAccept, onChange, sliders }) {
  const initialValues = Object.keys(sliders).reduce((a, c) => {
    a[c] = sliders[c].initValue;
    return a;
  }, {});

  const [dataState, setDataState] = useState(initialValues);

  const props = {
    sliders,
    onChange: (data) => {
      if (data) {
        setDataState({
          ...dataState,
          [data.name]: data.value,
        });
        onChange(data);
      }
    },
  };

  return (
    <div className="calculator">
      <CalculatorDesktop {...props} />
      <CalculatorMobile {...props} />
      <div className="calculator-footer">
        <button
          disabled={loading}
          className="calculator-btn"
          onClick={(e) => {
            e.preventDefault();
            onAccept(dataState);
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
