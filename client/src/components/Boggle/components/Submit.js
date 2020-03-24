/**
 * @file Submit component of the Boggle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';
import { updateInput, updateScore, resetInput } from '../../../redux/actions';
import validateWord from '../../../redux/actions/validateWord';

export class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    event.preventDefault();
    if (this.isInputValid()) {
      this.props.validateWord(this.props.input);
      //this.props.updateScore(29);
    } else {
      console.log('Word is not valid');
    }

    this.props.resetInput();
  };

  indexedBoard = letters => {
    return letters.split('').reduce((agg, letter, index) => {
      agg[index + 1] = letter;
      return agg;
    }, {});
  };

  isInputValid = () => {
    const { input, words, board } = this.props;
    if (input.length === 1) return board.includes(input);
    else if (input.length < 3) return false;
    else if (words.includes(input)) return false;
    const indexedBoard = this.indexedBoard(board);
    for (let i = 0; i <= Object.keys(indexedBoard).length; i++) {
      if (indexedBoard[i] === input[0]) {
        if (this.isAdjacentLetterValid(input, i, indexedBoard)) {
          return true;
        }
      }
    }
    return false;
  };

  isAdjacentLetterValid = (string, pos, board) => {
    // string lenght 1 means valid
    if (string.length === 1) return true;
    const remainingBoard = Object.assign({}, board);
    // remove the position from remaining board
    delete remainingBoard[pos];
    const nextLetter = string[1];
    const moves = this.getMoves(pos);
    for (let i = 0; i < moves.length; i++) {
      if (remainingBoard[moves[i]] === nextLetter) {
        const result = this.isAdjacentLetterValid(
          string.slice(1),
          moves[i],
          remainingBoard
        );
        if (result) {
          return result;
        }
      }
    }
    return false;
  };

  getMoves = pos => {
    // pos 4, 8, 12, 16 are at right edge
    const isAtRightEdge = pos => pos % 4 === 0;
    // pos 1, 5, 9, 13 are at left edge
    const isAtLeftEdge = pos => pos % 4 === 1;
    // pos 1, 2, 3, 4 are at top edge
    const isAtTopEdge = pos => pos <= 4;
    // post 13, 14, 15, 16
    const isAtBottomEdge = pos => pos >= 13;

    const moves = [];
    if (pos > 16) {
      throw new TypeError('Invalid position type or value');
    }
    // if pos is not at right edge, can move right
    if (!isAtRightEdge(pos)) {
      moves.push(pos + 1);
    }
    // if pos is not at right and top edge, can move top right
    if (!isAtRightEdge(pos) && !isAtTopEdge(pos)) {
      moves.push(pos - 3);
    }
    // if pos is not at right and bottom edge, can move bottom right
    if (!isAtRightEdge(pos) && !isAtBottomEdge(pos)) {
      moves.push(pos + 5);
    }
    // if pos is not left edge, can move left
    if (!isAtLeftEdge(pos)) {
      moves.push(pos - 1);
    }
    // if pos is not at left and top edge, can move top left
    if (!isAtLeftEdge(pos) && !isAtTopEdge(pos)) {
      moves.push(pos - 5);
    }
    // if pos is not at left and bottom edget, can move at bottom left
    if (!isAtLeftEdge(pos) && !isAtBottomEdge(pos)) {
      moves.push(pos + 3);
    }
    // if pos is not at top edge, move top
    if (!isAtTopEdge(pos)) {
      moves.push(pos - 4);
    }
    // if pos is not at bottom edge, move bottom
    if (!isAtBottomEdge(pos)) {
      moves.push(pos + 4);
    }
    return moves;
  };

  render() {
    return (
      <div className="submit">
        <input
          className="submit-input"
          type="text"
          id="name"
          name="name"
          value={this.props.input}
          onChange={event => this.props.updateInput(event.target.value)}
        />
        <button
          className="submit-button"
          disabled={!this.props.gameStarted}
          onClick={this.handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.gameReducer.board,
  words: state.gameReducer.words,
  input: state.gameReducer.input,
  gameStarted: state.gameReducer.gameStarted,
  total: state.gameReducer.totalScore
});

const mapDispatchToProps = {
  updateInput,
  resetInput,
  updateScore,
  validateWord
};

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
