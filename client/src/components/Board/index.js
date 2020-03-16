/**
* @file Main Board component of the boggle game
* @author sajalshres
*/

import React from 'react';
import './styles.scss';

function Board() {
    return (
        <div className="board">
            <div className="board__row">
                <button className="board__row-item">A</button>
                <button className="board__row-item">B</button>
                <button className="board__row-item">D</button>
                <button className="board__row-item">A</button>
            </div>
            <div className="board__row">
                <button className="board__row-item">A</button>
                <button className="board__row-item">B</button>
                <button className="board__row-item">D</button>
                <button className="board__row-item">A</button>
            </div>
            <div className="board__row">
                <button className="board__row-item">A</button>
                <button className="board__row-item">B</button>
                <button className="board__row-item">D</button>
                <button className="board__row-item">A</button>
            </div>
            <div className="board__row">
                <button className="board__row-item">A</button>
                <button className="board__row-item">B</button>
                <button className="board__row-item">D</button>
                <button className="board__row-item">A</button>
            </div>
        </div>
    );
}

export default Board

