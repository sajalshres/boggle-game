import React from 'react';

function Start(props) {
  return (
    <div className="total">
      <button className="start-btn" onClick={() => props.fetchGame()}>
        Start
      </button>
    </div>
  );
}

export default Start;
