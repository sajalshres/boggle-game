/**
 * @file Game component of the boggle game
 * @author sajalshres
 */

import React from 'react';
import Board from './components/Board';
import Score from './components/Score';

const Game = () => {
  return (
    <div className="game">
      <Board />
      <Score />
    </div>
  );
};

export default Game;
