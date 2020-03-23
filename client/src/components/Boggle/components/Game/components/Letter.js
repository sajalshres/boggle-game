/**
 * @file Letter component of the Boggle game
 * @author sajalshres
 */

import React from 'react';

function Letter(props) {
  return (
    <button
      className="letter"
      row={props.row}
      col={props.col}
      onClick={props.appendInput ? () => props.appendInput(props.letter) : null}
    >
      {props.letter}
    </button>
  );
}

export default Letter;
