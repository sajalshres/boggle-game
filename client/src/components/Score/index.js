/**
* @file Score compenent of boogle game
* @author sajalshres
*/

import React from 'react';
import './styles.scss';

function Score() {
    return (
        <div className="score">
        <table className="score-table">
            <thead>
                <tr>
                    <th className="score-table__word">Word</th>
                    <th className="score-table__score">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BAD</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Score
