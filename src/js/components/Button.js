import React from 'react';
import Loading from './Loading';

export default function Button({
  onClick,
  text,
  type,
  className = 'primary',
  icon,
  loading,
  name,
}) {
  const onClickHandler = (e) => {
    e.preventDefault();
    onClick(name);
  };

  return (
    <button
      disabled={loading}
      type={type}
      className={className}
      onClick={onClickHandler}
      name={name}
    >
      {loading ? (
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
