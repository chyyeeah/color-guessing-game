import React, { useState, useEffect } from 'react';
import ColorBox from './ColorBox.jsx';
import generateRGBValue from '../../utils/generateRGBValue';

const myStorage = window.localStorage;

export default ({ username }) => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const [color5, setColor5] = useState('');
  const [color6, setColor6] = useState('');
  const [answer, setAnswer] = useState('');
  const [wins, setWins] = useState(myStorage.wins);
  const [losses, setLosses] = useState(myStorage.losses);

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

  const checkAnswer = (guess) => {
    return answer === guess;
  };

  const submitAnswer = (e) => {
    const result = checkAnswer(e.target.dataset.rgb);
    if (result) {
      myStorage.wins++;
      setWins(myStorage.wins);
    } else {
      myStorage.losses++;
      setLosses(myStorage.losses);
    }
    setBoard();
  };

  useEffect(() => {
    myStorage.wins = 0;
    myStorage.losses = 0;
    setBoard();
  }, []);

  return (
    <div id="game">
      <div id="heading">
        <h1>{username}'s COLOR GRID</h1>
        <p>WINS: {wins}, LOSSES: {losses}</p>
      </div>
      <div id="board">
        <div className="temp-box command">
          <div>FIND THIS COLOR</div>
          <div>rgb({answer})</div>
        </div>
        {
          [
            color1, color2, color3,
            color4, color5, color6
          ].map((color, idx) => <ColorBox
            key={`color${idx + 1}`}
            box={`color${idx + 1}`}
            rgb={color}
            submitAnswer={submitAnswer} />
          )
        }
      </div>
      <div id="time">
        <p>San Francisco Time. XX:XX</p>
        <p>New York Time. XX:XX</p>
      </div>
    </div>
  )
};