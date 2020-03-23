/**
 * @file Main component of the boggle game
 * @author sajalshres
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchGame from '../../redux/actions/fetchGame';
import submitGame from '../../redux/actions/submitGame';
import { startGame, resetGame } from '../../redux/actions';
import Game from './components/Game';
import Total from './components/Total';
import Submit from './components/Submit';
import SubmitRank from './components/SubmitRank';
import Start from './components/Start';
import Modal from '../utils/Modal';

class Boogle extends Component {
  constructor(props) {
    super(props);

    // Local state
    this.state = {
      scoreModalVisible: false,
      userName: '',
      game: {}
    };

    // Bind function
    this.showScoreModal = this.showScoreModal.bind(this);
    this.hideScoreModal = this.hideScoreModal.bind(this);
    this.handleUserInputChange = this.handleUserInputChange.bind(this);
    this.handleSubmitRank = this.handleSubmitRank.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onTimeOut = this.onTimeOut.bind(this);
  }

  componentDidMount = () => {
    // Reset game when the component is mount
    this.props.resetGame();
  };

  showScoreModal = () => {
    // Show modal
    this.setState({
      scoreModalVisible: true
    });
  };

  hideScoreModal = () => {
    // Hide modal
    this.setState({
      scoreModalVisible: false
    });
    this.props.resetGame();
  };

  handleUserInputChange = event => {
    // Update the username
    this.setState({
      userName: event.target.value
    });
  };

  handleSubmitRank = async event => {
    event.preventDefault();
    // setState is asynchronous in React
    await this.setState({
      game: {
        user_name: this.state.userName,
        total_score: this.props.totalScore,
        words: this.props.words.join(' ')
      }
    });
    if (this.state.userName && Object.keys(this.state.game).length === 3) {
      this.props.submitGame({ ...this.state.game });
    }
    this.hideScoreModal();
  };

  handleClick = event => {
    event.preventDefault();
    this.props.startGame();
  };

  onTimeOut = () => {
    // Show submit modal when time out
    this.showScoreModal();
  };

  render() {
    return (
      <div className="container">
        <Game />
        {!this.props.gameStarted ? (
          <Start fetchGame={this.props.fetchGame} />
        ) : (
          <Total onTimeOut={this.onTimeOut} resetGame={this.props.resetGame} />
        )}
        <Submit />
        <Modal
          show={this.state.scoreModalVisible}
          handleClose={this.hideScoreModal}
          title="Submit Score"
        >
          <SubmitRank
            total={this.props.totalScore}
            handleChange={this.handleUserInputChange}
            handleSubmit={this.handleSubmitRank}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchPending: state.gameReducer.fetchPending,
  totalScore: state.gameReducer.totalScore,
  words: state.gameReducer.words,
  gameStarted: state.gameReducer.gameStarted
});

const mapDispatchToProps = {
  fetchGame,
  startGame,
  resetGame,
  submitGame
};

export default connect(mapStateToProps, mapDispatchToProps)(Boogle);
