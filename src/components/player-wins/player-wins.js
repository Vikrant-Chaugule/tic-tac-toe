import React from 'react';
import './player-wins.css';

export const PlayerWins = (props) => {
  const { player1Wins, player2Wins, onClickNewGame, winner } = props;
  const renderWinnerInfo = () => {
    if (winner)
      return (
        <div className="wins-container-2">
          <p
            style={{ color: '#1fadcc', marginTop: '10%', marginBottom: '10%' }}
          >
            Winner - {winner}
          </p>
          <p onClick={onClickNewGame}>New Game</p>
        </div>
      );
  };
  return (
    <div className="player-wins">
      <div className="wins-container">
        <p>Player 1</p>
        <p>
          {player1Wins} - {player2Wins}
        </p>
        <p>Player 2</p>
      </div>
      {renderWinnerInfo()}
    </div>
  );
};
