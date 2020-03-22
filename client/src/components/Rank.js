import React from 'react';

function Rank() {
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
        <tbody>
          <tr>
            <td>Sam</td>
            <td>40</td>
            <td>Sam Hello Pen Sit Hit Lit Nit Plunk Plunk Plunk Plunk</td>
            <td>19-20-2020</td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>40</td>
            <td>Sam Hello Pen Sit Hit Lit Nit Plunk</td>
            <td>19-20-2020</td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>40</td>
            <td>Sam Hello Pen Sit Hit Lit Nit Plunk</td>
            <td>19-20-2020</td>
          </tr>
          <tr>
            <td>Sam</td>
            <td>40</td>
            <td>Sam Hello Pen Sit Hit Lit Nit Plunk</td>
            <td>19-20-2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rank;
