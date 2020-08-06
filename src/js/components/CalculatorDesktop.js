import React from 'react';
import SliderDesktop from './SliderDesktop';
import Button from './Button';

function CalculatorDesktop({
  title,
  buttonText = 'Aceptar',
  exitMessage,
  onClickExitMessage,
  onAccept,
}) {
  return (
    <div className="calculator-desktop">
      {title && <h3 className="title">{title}</h3>}
      <SliderDesktop
        title="Importe"
        name="amount"
        extension="€"
        min={500}
        max={5000}
        step={100}
        value={2000}
        onChange={(data) => console.log(data)}
      />
      <SliderDesktop
        title="Plazo"
        name="term"
        extension="días"
        value={20}
        min={1}
        max={30}
        step={1}
        onChange={(data) => console.log(data)}
      />
      <Button text={buttonText} onClick={onAccept} />
      {exitMessage && (
        <p onClick={onClickExitMessage} className="exit text-small">
          {exitMessage}
        </p>
      )}
    </div>
  );
}

export default React.memo(CalculatorDesktop);
