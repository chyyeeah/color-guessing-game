import React, { useState, useEffect } from 'react';
import moment from 'moment';
import confetti from 'canvas-confetti';
import ColorBox from './ColorBox.jsx';
import generateRGBValue from '../../utils/generateRGBValue';

export default ({ username }) => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const [color5, setColor5] = useState('');
  const [color6, setColor6] = useState('');
  const [answer, setAnswer] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [sfDateTime, setSfDateTime] = useState(moment());
  const [nyDateTime, setNyDateTime] = useState(moment());

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
    const payload = { username, result };
    if (result) {
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      });
    }

    fetch('http://localhost:3001/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then((response) => response.json())
    .then((data) => {
      setWins(data.wins);
      setLosses(data.losses);
      setSfDateTime(data.sfDateTime);
      setNyDateTime(data.nyDateTime);
      setBoard();
    })
    .catch((error) => {
      console.error('Error!', error);
    });
  };

  useEffect(() => {
    setBoard();

    fetch(`http://localhost:3001/score?username=${username}`)
    .then((response) => response.json())
    .then((data) => {
      setWins(data.wins);
      setLosses(data.losses);
      setSfDateTime(data.sfDateTime);
      setNyDateTime(data.nyDateTime);
      setBoard();
    })
    .catch((error) => {
      console.error('Error!', error);
    });
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
        <p>San Francisco Time. {moment(sfDateTime).format('h:mm A. MMMM D, YYYY')}</p>
        <p>New York Time. {moment(nyDateTime).format('h:mm A. MMMM D, YYYY')}</p>
      </div>
    </div>
  )
};