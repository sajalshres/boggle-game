/**
 * @file Letter component of the Boggle game
 * @author sajalshres
 */

import React from 'react';
import './styles.scss';

function Letter(props) {
  return (
    <button
      className="board__letter"
      row={props.row}
      col={props.col}
      onClick={() => props.appendInput(props.letter)}
    >
      {props.letter}
    </button>
  );
}

export default Letter;
