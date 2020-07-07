import React, { useState, useEffect } from 'react';
import './game-board.css';
import ticX from '../../assets/tic-tac-toe-x.jpg';
import ticO from '../../assets/tic-tac-toe-o.jpg';

export const GameBoard = (props) => {
  const {
    gameMatrix,
    player1Wins,
    player2Wins,
    setPlayer1Wins,
    setPlayer2Wins,
    setWinner,
    selectedIcon,
    setTie,
    tie,
  } = props;
  const [selectedType, setSelectedType] = useState(selectedIcon);
  const [gameFinished, setGameFinished] = useState(false);
  const [winnerSet, setWinnerSet] = useState([]);

  const winningPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    setWinnerSet([]);
    setGameFinished(false);
    setSelectedType(selectedIcon);
  }, [gameMatrix, selectedIcon]);

  const renderTicX = (index) => {
    if (gameMatrix[index][0] === 1) {
      return <img src={ticX} alt="X" width="90" height="90" />;
    }
    if (gameMatrix[index][0] === 0) {
      return <img src={ticO} alt="X" width="90" height="90" />;
    }
  };

  const onClick = (index) => {
    if (selectedType === 'X' && !gameMatrix[index][1]) {
      setSelectedType('O');
      gameMatrix[index] = [1, true];
    } else if (selectedType === 'O' && !gameMatrix[index][1]) {
      setSelectedType('X');
      gameMatrix[index] = [0, true];
    }

    checkWinner();
  };

  const checkWinner = () => {
    let isMatchTied = true;

    for (let i = 0; i < winningPossibilities.length; i++) {
      if (
        gameMatrix[winningPossibilities[i][0]][0] &&
        gameMatrix[winningPossibilities[i][1]][0] &&
        gameMatrix[winningPossibilities[i][2]][0]
      ) {
        setWinnerSet([...winningPossibilities[i]]);
        setGameFinished(true);

        if (selectedIcon === 'X') {
          setPlayer1Wins(player1Wins + 1);
          setWinner('Player 1');
        } else {
          setPlayer2Wins(player2Wins + 1);
          setWinner('Player 2');
        }
        return;
      }

      if (
        gameMatrix[winningPossibilities[i][0]][0] == 0 &&
        gameMatrix[winningPossibilities[i][1]][0] == 0 &&
        gameMatrix[winningPossibilities[i][2]][0] == 0
      ) {
        setWinnerSet([...winningPossibilities[i]]);
        setGameFinished(true);
        if (selectedIcon === 'X') {
          setPlayer2Wins(player2Wins + 1);
          setWinner('Player 2');
        } else {
          setPlayer1Wins(player1Wins + 1);
          setWinner('Player 1');
        }
        return;
      }

      if (gameMatrix[i][0] === undefined) {
        isMatchTied = false;
      }
    }

    if (isMatchTied) {
      setTie(true);
    }
  };
  return (
    <div className="game-board">
      <div className="grid">
        <GridItem
          renderFunction={renderTicX}
          index={0}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={1}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={2}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={3}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={4}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={5}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={6}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={7}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
        <GridItem
          renderFunction={renderTicX}
          index={8}
          onClickGrid={onClick}
          gameFinished={gameFinished}
          winnerSet={winnerSet}
          tie={tie}
        />
      </div>
    </div>
  );
};

const GridItem = (props) => {
  const {
    renderFunction,
    index,
    onClickGrid,
    winnerSet,
    gameFinished,
    tie,
  } = props;
  const loserGrid = gameFinished ? 'grid-item-loser' : '';
  const tieStyle = tie ? 'grid-item-loser' : '';
  const style = winnerSet.includes(index)
    ? `grid-item ${tieStyle}`
    : `grid-item ${tieStyle} ${loserGrid}`;

  return (
    <div className={style} onClick={() => onClickGrid(index)}>
      {renderFunction(index)}
    </div>
  );
};
