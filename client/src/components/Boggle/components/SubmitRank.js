import React from 'react';

const SubmitRank = ({ total, handleChange, handleSubmit }) => {
  return (
    <div className="submit-rank">
      <h2 className="submit-rank__title is-3 is-centered">Time Out</h2>
      <p className="submit-rank__score is-centered">You scored: {total}</p>

      <input
        className="submit-rank__input"
        type="text"
        id="username"
        name="username"
        placeholder="Your name"
        onChange={event => handleChange(event)}
      />
      <button
        className="submit-rank__button"
        onClick={event => handleSubmit(event)}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitRank;
