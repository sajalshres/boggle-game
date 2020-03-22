/**
 * @file Main Board component of the boggle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';
import { appendInput } from '../../../../../redux/actions';
import Letter from './Letter';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.getLetterDivs = this.getLetterDivs.bind(this);
  }

  getLetterDivs(board) {
    let boardLetters = board
      ? board
      : Array(16)
          .fill(' ')
          .join('');
    return boardLetters.split('').map((letter, idx) => {
      return (
        <Letter
          letter={letter}
          key={idx}
          row={idx % 4}
          col={Math.floor(idx / 4)}
          appendInput={this.props.appendInput}
        />
      );
    });
  }

  render() {
    return <div className="board">{this.getLetterDivs(this.props.board)}</div>;
  }
}

const mapStateToProps = state => ({
  board: state.gameReducer.board
});

const mapDispatchToProps = {
  appendInput
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
