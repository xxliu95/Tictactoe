import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';
import { connect } from 'react-redux';
import { playPosition, reset } from "../redux/action";
import '../App.css';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

class App extends React.Component {

    constructor(props){
        super(props);
        this.appClick = this.appClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }


    appClick(rowNumber, columnNumber) {
        this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn));
    }

    resetClick() {
        this.props.dispatch(reset());
    }

    render(){
        let text = "Turn of " + this.props.turn;
        return (
            <div>
                <Header text={text}></Header>
                <Board appClick={this.appClick} values={this.props.values}></Board>
                <h3>Number of moves: {this.props.moves}</h3>
                <Reset resetClick={this.resetClick}></Reset>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        turn: state.turn,
        moves: state.moves,
    };
}
export default connect(mapStateToProps) (App);

