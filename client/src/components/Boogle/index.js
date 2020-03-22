/**
 * @file Main component of the boggle game
 * @author sajalshres
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGame from '../../redux/actions/fetchGame';
import Game from '../Game';
import Total from '../Total';
import Submit from '../Submit';
import './styles.scss';

class Boogle extends Component {
  componentDidMount() {
    const { fetchGame } = this.props;
    fetchGame();
  }

  render() {
    return (
      <div className="container">
        <Game />
        <Total />
        <Submit />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchPending: state.gameReducer.fetchPending,
  board: state.gameReducer.board,
  fetchError: state.gameReducer.fetchError
});

const mapDispatchToProps = {
  fetchGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Boogle);
