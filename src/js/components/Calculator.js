import React, { useCallback, useState } from 'react';
import smoothScroll from 'smoothscroll-polyfill';
import Loading from './Loading';
import SliderDesktop from './SliderDesktop';
import MobileSlideRuler from './MobileSlideRuler';
import PropTypes from 'prop-types';

smoothScroll.polyfill();

export default function Calculator({
  buttonText,
  buttonIcon,
  loading,
  onAccept,
  onChange,
  sliders,
}) {
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

Calculator.propTypes = {
  buttonText: PropTypes.string,
  buttonIcon: PropTypes.string, // url to icon
  loading: PropTypes.bool,
  onAccept: PropTypes.func, // full application data { [name]: number }
  onChange: PropTypes.func, // slider data { name: string, value: number }
  sliders: PropTypes.object.isRequired, // slider shape
};
