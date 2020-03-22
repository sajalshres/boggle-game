/**
 * @file Score compenent of boogle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

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
      <table className="score-table">
        <thead>
          <tr>
            <th className="score-table__word">Word</th>
            <th className="score-table__score">Score</th>
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
