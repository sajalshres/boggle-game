/**
 * @file Main component of the boggle game
 * @author sajalshres
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGame from '../../redux/actions/fetchGame';
import { startGame, resetGame } from '../../redux/actions';
import Game from './components/Game';
import Total from './components/Total';
import Submit from './components/Submit';
import Start from './components/Start';

class Boogle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { fetchGame, resetGame } = this.props;
    resetGame();
  }

  handleClick(event) {
    this.props.startGame();
  }

  render() {
    return (
      <div className="container">
        <Game />
        {!this.props.gameStarted ? (
          <Start fetchGame={this.props.fetchGame} />
        ) : (
          <Total />
        )}
        <Submit />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchPending: state.gameReducer.fetchPending,
  board: state.gameReducer.board,
  gameStarted: state.gameReducer.gameStarted,
  fetchError: state.gameReducer.fetchError
});

const mapDispatchToProps = {
  fetchGame,
  startGame,
  resetGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Boogle);
