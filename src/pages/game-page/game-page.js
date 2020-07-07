import React, { useState } from 'react';
import { GameBoard } from '../../components/game-board/game-board';
import './game-page.css';
import { PlayerWins } from '../../components/player-wins/player-wins';

export const GamePage = (props) => {
  const { selectedSide, setTie, tie } = props;
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [winner, setWinner] = useState('');

  const initialMatrix = [
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
  const [gameMatrix, setGameMatrix] = useState([...initialMatrix]);

  const onClickNewGame = () => {
    setGameMatrix([...initialMatrix]);
    setWinner('');
    setTie(false);
  };

  return (
    <div className="game-page">
      <PlayerWins
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        onClickNewGame={onClickNewGame}
        winner={winner}
        tie={tie}
      />
      <GameBoard
        setPlayer1Wins={setPlayer1Wins}
        setPlayer2Wins={setPlayer2Wins}
        player1Wins={player1Wins}
        player2Wins={player2Wins}
        gameMatrix={gameMatrix}
        setWinner={setWinner}
        selectedIcon={selectedSide}
        setTie={setTie}
        tie={tie}
      />
    </div>
  );
};
