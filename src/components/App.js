import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';
import '../App.css';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            turn: PLAYERX,
            values: [
                ['-','-','-'],
                ['-','-','-'],
                ['-','-','-']
            ],
            moves: 0
        };
        this.appClick = this.appClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    appClick(rowNumber, columnNumber) {
        let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
        let newMovement = this.state.turn === PLAYERX ? 'X':'0';
        valuesCopy[rowNumber][columnNumber] = newMovement;
        this.setState({
            turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
            values: valuesCopy,
            moves: this.state.moves + 1
        });
    }

    resetClick() {
        this.setState({
            turn: PLAYERX,
            values: [
                ['-','-','-'],
                ['-','-','-'],
                ['-','-','-']
            ],
            moves: 0
        });
    }

    render(){
        let text = "Turn of " + this.state.turn;
        return (
            <div>
                <Header text={text}></Header>
                <Board appClick={this.appClick} values={this.state.values}></Board>
                <h3>Number of moves: {this.state.moves}</h3>
                <Reset resetClick={this.resetClick}></Reset>
            </div>
        );
    }
}
