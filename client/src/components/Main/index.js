/**
* @file Main component of the boggle game
* @author sajalshres
*/

import React from 'react';
import Game from '../Game/index';
import Total from '../Total/index';
import Submit from '../Submit/index';
import './styles.scss'

function Main() {
    return (
        <main className='main'>
            <Game />
            <Total />
            <Submit />
        </main>
    );
}

export default Main
