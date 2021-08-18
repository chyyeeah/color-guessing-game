import React, { useState, useEffect } from 'react';
import generateRGBValue from '../utils/generateRGBValue';

export default () => {
  const [ color1, setColor1 ] = useState('');
  const [ color2, setColor2 ] = useState('');
  const [ color3, setColor3 ] = useState('');
  const [ color4, setColor4 ] = useState('');
  const [ color5, setColor5 ] = useState('');
  const [ color6, setColor6 ] = useState('');
  const [ answer, setAnswer ] = useState('');

  const setters = [
    setColor1, setColor2, setColor3,
    setColor4, setColor5, setColor6
  ];

  const setBoard = () => {
    const colors = [];
    for (let i = 0; i < 6; i++) {
      colors.push(generateRGBValue());
    }
    setters.forEach((setColor, idx) => {
      setColor(colors[idx]);
    });
    setAnswer(colors[Math.floor(Math.random() * 6)]);
  };

  useEffect(() => {
    setBoard();
  }, []);

  return (
    <div id="game">
      <div id="heading">
        <h1>[NAME]'s COLOR GRID</h1>
        <p>WINS: 8, LOSSES: 8</p>
      </div>
      <div id="board">
        <div className="temp-box color1" data-rgb={color1}>color1</div>
        <div className="temp-box color2" data-rgb={color2}>color2</div>
        <div className="temp-box color3" data-rgb={color3}>color3</div>
        <div className="temp-box command">command</div>
        <div className="temp-box color4" data-rgb={color4}>color4</div>
        <div className="temp-box color5" data-rgb={color5}>color5</div>
        <div className="temp-box color6" data-rgb={color6}>color6</div>
      </div>
      <div id="time">
        <p>San Francisco Time. XX:XX</p>
        <p>New York Time. XX:XX</p>
      </div>
    </div>
  )
};