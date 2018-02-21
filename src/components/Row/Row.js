import React, { Component } from 'react';


export default class Row extends Component {

    constructor(props) {
        super(props);

        this.initRows = this.initRows.bind(this);
        let table = this.initRows();

        this.state = {
            table
        }
    }

    initRows() {
        return Array.apply(null, { length: props.numRows }).map(row => {
            return Array.apply(null, { length: props.numCols }).map(col => {
                return {
                    x: col,
                    y: row,
                    count: 0,
                    open: false,
                    mine: false,
                    flag: false
                };
            });
        });
    }

    createRows() {
        for (let index = 0; index < props.numMines; index++) {
            let cell = this.state.table[Math.floor(Math.random() * props.numRows)][Math.floor(Math.random() * props.numCols)];
            if (cell.mine) {
                index--;
            } else {
                cell.mine = true;
            }
        }
        return table;
    }

    render() {
        return ();
    }

}