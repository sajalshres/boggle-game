/**
 * @file Total score component of boggle game
 * @author sajalshres
 */

import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

function Total({ total }) {
  return (
    <div className="total">
      <div className="total__title">Total</div>
      <div className="total__score">{total}</div>
    </div>
  );
}

const mapStateToProps = state => {
  const total = state.gameReducer.totalScore;
  return { total };
};

export default connect(mapStateToProps, null)(Total);
