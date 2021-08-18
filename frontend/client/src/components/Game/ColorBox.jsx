import React from 'react';

export default ({box, rgb, submitAnswer}) => {
  console.log(rgb);
  return (
    <div
      className={`temp-box ${box}`}
      data-rgb={rgb}
      onClick={submitAnswer}
      style={{backgroundColor: `rgb(${rgb})`}}>{box}</div>
  )
};