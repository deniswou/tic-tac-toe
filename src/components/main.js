import React, { Component } from 'react';
import { AppContext } from '../provider';
import { GAME_TYPES, PLAYER_TURNS, ICON_CHARS } from '../game';
import './main.css';

const ICON_PLACE_HOLDDER = 'I';

const Cell = (props) => {
  return (
    <AppContext.Consumer>
      {context => {
        const value = context.cells[props.index];
        const icon = value !== null ? ICON_CHARS[value] : ICON_PLACE_HOLDDER;
        const isDoneClass = icon !== ICON_PLACE_HOLDDER ? 'done' : '';

        return (
          <button
            className={`cell cell-${props.index} ${isDoneClass}`}
            onClick={() => context.humanPlay(props.index)}>
            {icon}
          </button>
        )
      }}
    </AppContext.Consumer>
  )
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.boardRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.context.gameState.position !== "") {
      setTimeout(() => {
        this.boardRef.current.classList.add('full');
      }, 50);
    } else {
      this.boardRef.current.classList.remove('full');
    }
  }

  render() {
    return (
      <div className={`board ${this.context.gameState.position}`} ref={this.boardRef}>
        <div className="board-row">
          <Cell index={0} />
          <Cell index={1} />
          <Cell index={2} />
        </div>

        <div className="board-row">
          <Cell index={3} />
          <Cell index={4} />
          <Cell index={5} />
        </div>

        <div className="board-row">
          <Cell index={6} />
          <Cell index={7} />
          <Cell index={8} />
        </div>
      </div>
    )
  }
}
Board.contextType = AppContext;

class main extends Component {
  render() {
    let textInfo = '';
    const currentIconType = this.context.currentIcon;

    if (this.context.gameState.isTie) {
      textInfo = 'Empate!';
    } else {
      if (this.context.gameType === GAME_TYPES.TWO_PLAYERS) {
        if (this.context.gameState.position === "") {
          textInfo = `Turno del Jugador (${ICON_CHARS[currentIconType]}) !`;
        } else {
          textInfo = `El Jugador (${ICON_CHARS[1 - currentIconType]}) es ganador!`;
        }
      } else {
        if (this.context.gameState.position === "") {
          if (this.context.playerTurn === PLAYER_TURNS.HUMAN) textInfo = `Es tu turno!`;
          else textInfo = `Turno de la PC!`;
        } else {
          if (this.context.playerTurn === PLAYER_TURNS.HUMAN) textInfo = `Ups... La PC gana!`;
          else textInfo = `Eres el ganador!`;
        }
      }
    }

    return (
      <main className="main">
        <div className="info">{textInfo}</div>
        <Board />
      </main>
    );
  }
}
main.contextType = AppContext;

export default main;