import React, { Component } from 'react';
import { AppContext } from '../provider';
import { GAME_TYPES } from '../game';

import './header.css';

const GameType = (props) => {
    const { value, name } = props;

    return (
      <AppContext.Consumer>
        {context => (
          <li 
            onClick={() => context.changeType(value)} 
            className={value === context.gameType ? "active" : ""}> 
            {name} 
          </li>
        )}
      </AppContext.Consumer>
    )
  }

class header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Tic Tac Toe</h1>
        <ul>
          <GameType value={GAME_TYPES.TWO_PLAYERS} name="2 Jugadores" />
          <GameType value={GAME_TYPES.VERSUS_COMPUTER} name="Vs. PC" />
        </ul>
        <div>
          <button onClick={() => this.context.newGame()}>Nuevo</button>
        </div>
      </header>
    );
  }
}

header.contextType = AppContext;

export default header;