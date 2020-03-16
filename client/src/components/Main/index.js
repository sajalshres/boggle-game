/**
* @file Main component of the boggle game
* @author sajalshres
*/

import React, { Component } from 'react';
import Game from '../Game/index';
import Total from '../Total/index';
import Submit from '../Submit/index';
import './styles.scss'

class Main extends Component {

  componentDidMount(){
    fetch('/api/v1/games')
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <main className='main'>
            <Game />
            <Total />
            <Submit />
        </main>
    );
  }
}


export default Main
