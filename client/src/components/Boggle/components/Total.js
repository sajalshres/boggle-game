/**
 * @file Total score component of boggle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';

function Total({ total }) {
  return (
    <div className="total">
      <div className="total-title">Total</div>
      <div className="total-score">{total}</div>
    </div>
  );
}

const mapStateToProps = state => {
  const total = state.gameReducer.totalScore;
  return { total };
};

export default connect(mapStateToProps, null)(Total);