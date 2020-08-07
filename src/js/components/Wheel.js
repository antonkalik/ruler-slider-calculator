import React, { useCallback, useEffect, useRef, useState } from 'react';
import { range } from '../../utilities';

let timer = null;
export default function Wheel({ min, max, step, value, onChange, currencySymbol, name }) {
  const wheelRef = useRef(null);
  const sideDigits = 2;
  const sideItems = Array(sideDigits).fill('');
  const items = [...sideItems, ...range(min, max, step), ...sideItems];
  const itemsInScreen = sideDigits * 2 + 1;
  const itemWidth = Math.round(window.innerWidth / itemsInScreen);
  const [currentIndex, setCurrentIndex] = useState(items.indexOf(value));
  const lines = [...new Array(5).keys()];
  const sideItemsIndex = {
    left: currentIndex - sideDigits,
    right: currentIndex + sideDigits,
    middleLeft: currentIndex - 1,
    middleRight: currentIndex + 1,
  };

  const scrollTo = useCallback(
    (left) => {
      const wheelElement = document.getElementById(name);
      wheelElement.scrollTo({
        left,
        top: 0,
        behavior: 'smooth',
      });
    },
    [name]
  );

  const scrollCallback = useCallback(() => {
    let centerIndex = Math.round(wheelRef.current.scrollLeft / itemWidth);

    if (timer !== null) {
      clearTimeout(timer);
    }
    setCurrentIndex(centerIndex + sideDigits);
    timer = setTimeout(() => {
      onChange({ value: items[centerIndex + sideDigits], name });
    }, 200);
  }, [name]);

  useEffect(() => {
    scrollTo((currentIndex - sideDigits) * itemWidth);
    const wheelElement = document.getElementById(name);
    wheelElement.addEventListener('scroll', scrollCallback);
    return () => wheelElement.removeEventListener('scroll', scrollCallback);
  }, []);

  const onClickItem = (index) => {
    scrollTo((index - sideDigits) * itemWidth);
  };

  return (
    <div id={name} ref={wheelRef} className="wheel">
      {['left', 'right'].map((side) => (
        <div
          key={side}
          className="highlight"
          style={{
            [side]: 0,
          }}
        />
      ))}
      <div className="wheel-container">
        {items.map((item, i) => {
          let isActive = currentIndex === i;
          let classNames = [
            'wheel-item',
            isActive && 'active',
            sideItemsIndex.left === i && 'left-item',
            sideItemsIndex.right === i && 'right-item',
          ]
            .filter((it) => it)
            .join(' ');
          return (
            <div className={classNames} onClick={() => onClickItem(i)} key={i}>
              {item > 0 ? (
                <p>
                  {item}
                  <span className="currency-symbol">{currencySymbol}</span>
                </p>
              ) : (
                item
              )}
              <div className="lines">
                {lines.map((i) => (
                  <span
                    key={i}
                    style={{
                      height: Math.floor((lines.length - 1) / 2) === i ? (isActive ? 18 : 12) : 5,
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
