import React from 'react';
import './styles.scss';

function Rank() {
  return (
    <div className="rank">
      <h1 className="rank__title">Rank Page</h1>
      <table className="rank-table">
        <thead>
          <tr>
            <th className="rank-table__name">Name</th>
            <th className="rank-table__score">Score</th>
            <th className="rank-table__words">Words</th>
            <th className="rank-table__date">Date</th>
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
