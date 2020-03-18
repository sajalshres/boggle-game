/**
* @file Main component of the boggle game
* @author sajalshres
*/

import React, { Component } from 'react';
import Game from '../Game';
import Total from '../Total';
import Submit from '../Submit';
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
