import React from 'react';
import Loading from './Loading';

export default function Button({ onClick, text, type = 'primary', icon, loading = {}, name }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    onClick(name);
  };

  const isLoading = loading[name];

  return (
    <button disabled={isLoading} className={type} onClick={onClickHandler} name={name}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p>{text}</p>
          {icon && <img alt="" className="icon-button" src={icon} />}
        </>
      )}
    </button>
  );
}
