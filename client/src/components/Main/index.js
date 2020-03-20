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

class Main extends Component {
  componentDidMount() {
    const { fetchGame } = this.props;
    fetchGame();
  }

  render() {
    console.log('Main:PROPS===>', this.props);
    return (
      <main className="main">
        <Game />
        <Total />
        <Submit />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.gameReducer.pending,
  game: state.gameReducer.game,
  error: state.gameReducer.error
});

const mapDispatchToProps = {
  fetchGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
