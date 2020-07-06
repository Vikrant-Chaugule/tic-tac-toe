import React, { useState } from 'react';
import { GameBoard } from '../../components/game-board/game-board';
import './game-page.css';
import { PlayerWins } from '../../components/player-wins/player-wins';

export const GamePage = (props) => {
  const { selectedSide } = props;
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [winner, setWinner] = useState('');

  const initialArray = [
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
    [undefined, false],
  ];
  const [arr, setArr] = useState([...initialArray]);

  const onClickNewGame = () => {
    setArr([...initialArray]);
    setWinner('');
  };

  return (
    <div className="game-page">
      <PlayerWins
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        onClickNewGame={onClickNewGame}
        winner={winner}
      />
      <GameBoard
        setPlayer1Wins={setPlayer1Wins}
        setPlayer2Wins={setPlayer2Wins}
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        arr={arr}
        setWinner={setWinner}
        selectedIcon={selectedSide}
      />
    </div>
  );
};
