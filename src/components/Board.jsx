import React from 'react';
import Square from "./Square";

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.boardClick = this.boardClick.bind(this);
    }

    boardClick(rowNumber, columnNumber) {
        this.props.appClick(rowNumber, columnNumber);
    }

    render() {
        let board = this.props.values.map((rowValues, rowIndex) => {
            let row = rowValues.map((value, columnIndex) => {
                let mykey = "" + rowIndex + columnIndex;
                return (
                    <Square rowIndex={rowIndex} columnIndex={columnIndex} boardClick={this.boardClick} value={value} key={mykey}/>
                );
            });
            return (
                <div key={"row" + rowIndex}>{row}</div>
            );
        });
        return (
            <div>{board}</div>
        );
    }
}