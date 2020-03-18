/**
* @file Game component of the boggle game
* @author sajalshres
*/

import React from 'react';
import Board from '../Board';
import Score from '../Score';
import './styles.scss';

function Game() {
    return (
        <div className='game'>
            <Board />
            <Score />
        </div>
    );
}

export default Game
