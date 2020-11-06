import React, { useState, useEffect } from 'react';

const Roulette = () => {
  const [participants, setParticipants] = useState('');
  const [winner, setWinner] = useState('');
  const [showWinner, setShowWinner] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const chooseWinner = () => {
    if (showWinner) return null;
    let participantsArr = participants.split(',');
    let winningNumber = Math.round(
      Math.random() * (participantsArr.length - 1)
    );
    let winner = participantsArr[winningNumber];
    setWinner(winner);
    setShowWinner(true);
    setShowAnimation(true);
  };

  return (
    <React.Fragment>
      <div className="roulette-title">
        <h1>Roulette</h1>
        <p>Let's start sharing those rewards!</p>
      </div>
      <div className="separator"></div>
      <div className="roulette-container">
        <div className="roulette-left">
          <p>Separate the participants name by commas.</p>
          <h6>Separa los nombres usando comas</h6>
          <textarea
            className="roulette-input"
            placeholder="John Doe, Fulanito, Troy Bolton"
            onChange={(e) => {
              setParticipants(e.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className="roulette-right">
          <button
            onClick={chooseWinner}
            className="roulette-button know-the-winner-button"
          >
            CLICK HERE TO KNOW THE WINNER
          </button>
          <h3>The Winner is...</h3>

          <div className="filling-bar-container">
            <div className={'roulette-animation-filling-bar'}></div>
            <div
              className={
                showAnimation
                  ? 'roulette-animation-fill-on roulette-animation-fill-off'
                  : 'roulette-animation-fill-off'
              }
            ></div>
          </div>

          <div
            className={`roulette-congratulations ${
              showWinner ? 'show-winner' : null
            }`}
          >
            CONGRATULATIONS!:
            <div className="winner-name">{showWinner && winner}</div>
          </div>

          <button
            className="roulette-button"
            onClick={() => {
              setWinner('');
              setShowWinner(false);
              setShowAnimation(false);
            }}
          >
            Restart Roulette
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Roulette;
