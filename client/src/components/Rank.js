import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRank from '../redux/actions/fetchRank';

class Rank extends Component {
  componentDidMount() {
    const { fetchRank } = this.props;
    fetchRank();
    console.log(this.props.ranks);
  }

  getRanks = () => {
    return this.props.ranks.map((rank, index) => {
      return (
        <tr key={index}>
          <td>{rank.user_name}</td>
          <td>{rank.total_score}</td>
          <td>{rank.words}</td>
          <td>{rank.created_at.split('T')[0]}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="rank">
        <h1 className="title is-1 is-centered">Rank Page</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="rank-name">Name</th>
              <th className="rank-score">Score</th>
              <th className="rank-words">Words</th>
              <th className="rank-date">Date</th>
            </tr>
          </thead>
          <tbody>{this.getRanks()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchPending: state.rankReducer.fetchPending,
  fetchError: state.rankReducer.fetchError,
  ranks: state.rankReducer.ranks
});

const mapDispatchToProps = {
  fetchRank
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);
