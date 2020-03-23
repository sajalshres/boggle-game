/**
 * @file Total score component of boggle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: this.props.timeLimit
    };
  }

  componentDidMount = () => {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
    //clear interval
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.props.onTimeOut();
    }
  };

  render() {
    return (
      <div className="total">
        <div className="total-timer">
          Timer <span>{this.state.currentCount}</span>
        </div>
        <div className="total-score">
          Total <span>{this.props.total}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.gameReducer.totalScore,
  timeLimit: state.gameReducer.timeLimit,
  gameStarted: state.gameReducer.gameStarted
});

export default connect(mapStateToProps, null)(Total);
