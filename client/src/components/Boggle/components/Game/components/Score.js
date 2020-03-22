/**
 * @file Score compenent of boogle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';

function Score({ words }) {
  const showScore = () => {
    return words.map((word, idx) => {
      return (
        <tr key={idx}>
          <td>{word}</td>
          <td>{word.length}</td>
        </tr>
      );
    });
  };
  return (
    <div className="score">
      <table className="table">
        <thead>
          <tr>
            <th className="score-word">Word</th>
            <th className="score-total">Score</th>
          </tr>
        </thead>
        <tbody>{showScore()}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  const words = state.gameReducer.words;
  return { words };
};

export default connect(mapStateToProps, null)(Score);
