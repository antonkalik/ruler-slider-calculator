import React from 'react';

export default function Loading({ times = 3 }) {
  return (
    <span className="loading">
      {[...Array(times).keys()].map((it, i) => (
        <span className={'dot-' + i} key={i} />
      ))}
    </span>
  );
}
