import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1 className="title is-1 is-centered">Welcome</h1>
      <div className="description">
        <p className="is-justified">
          Boggle is a word game invented by Allan Turoff and originally
          distributed by Parker Brothers. The game is played using a plastic
          grid of lettered dice, in which players attempt to find words in
          sequences of adjacent letters.
        </p>
        <h2 className="title is-2 is-centered">Rules</h2>
        <ul>
          <li>Players have three minutes</li>
          <li>Player will have to find as many words as thay can in board.</li>
          <li>Letters mush be adjoining in a chain.</li>
          <li>
            Letter chain may be adjacent horizontally, vertically or diagonally
          </li>
          <li>Words must contain at least three letters.</li>
          <li>
            No letter cube may be used more than once within a single word.
          </li>
          <li>You can type the words in the input box as well.</li>
        </ul>
        <a
          href="https://en.wikipedia.org/wiki/Boggle"
          target="_blank"
          className="link"
        >
          read more...
        </a>
      </div>
    </div>
  );
}

export default Home;
