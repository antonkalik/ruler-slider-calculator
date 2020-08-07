import React, { useCallback, useState } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import Loading from './Loading';
import SliderDesktop from './SliderDesktop';
import MobileSlideRuler from './MobileSlideRuler';

smoothScroll.polyfill();

function Calculator({ buttonText, buttonIcon, loading, onAccept, onChange, sliders }) {
  const initialValues = Object.keys(sliders).reduce((a, c) => {
    a[c] = sliders[c].initValue;
    return a;
  }, {});

  const [dataState, setDataState] = useState(initialValues);
  const onChangeHandler = useCallback((data) => {
    if (data) {
      setDataState({
        ...dataState,
        [data.name]: data.value,
      });
      onChange(data);
    }
  }, []);

  const components = {
    desktop: SliderDesktop,
    mobile: MobileSlideRuler,
  };

  return (
    <div className="calculator">
      {Object.keys(components).map((key) => {
        const Slider = components[key];
        return Object.keys(sliders).map((name) => (
          <div key={name} className={`calculator-${key}`}>
            <Slider key={key} name={name} onChange={onChangeHandler} {...sliders[name]} />
          </div>
        ));
      })}

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
