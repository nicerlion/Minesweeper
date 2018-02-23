import React, { Component } from 'react';
import Row from './../Row/Row';


export default class Table extends Component {

    constructor(props) {
        super(props);

        this.initRows = this.initRows.bind(this);
        let table = this.initRows();

        this.state = {
            table,
            preparedToOpen: []
        }

        this.setMines = this.setMines.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidMount() {
        this.setMines();
    }

    /** 
     * Function to initialize table array with NumRows, NumCols
    */
    initRows() {
        return Array.apply(null, { length: this.props.numRows }).map((_, row) => {
            return Array.apply(null, { length: this.props.numCols }).map((__, col) => {
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

    /**
     * Function to set mines in board
     */
    setMines() {
        for (let index = 0; index < this.props.numMines; index++) {
            let cell = this.state.table[Math.floor(Math.random() * this.props.numRows)][Math.floor(Math.random() * this.props.numCols)];
            if (cell.mine) {
                index--;
            } else {
                cell.mine = true;
            }
        }
    }


    open(cellInstance) {
        let cell = 'state' in cellInstance ? cellInstance.state._meta: cellInstance;

        let numMines = this.getMinesAroundCell(cell);
        let table = this.state.table;

        table[cell.y][cell.x].open = true;
        // table[cell.y][cell.x].count = cell.mine ? "b" : numMines;

        this.setState({ table });

        if (!cell.mine && numMines === 0) {
            this.openAround(cell);
        }

        if (cell.mine) {  // game over

        }
    }

    mark(cell) {
        let table = this.state.table;
        let _cell = table[cell.y][cell.x];
        _cell.flag = !_cell.flag;
        this.setState({ table });
        this.props.checkFlagNum(_cell.flag ? 1 : -1);
    }

    /**
     * This function returns the number of mines around a cell
     * @param {cell Object} cell object cell from table
     */
    getMinesAroundCell(cell) {
        let aroundMinesNum = 0;
        for (let row = -1; row <= 1; row++) {
            for (let col = -1; col <= 1; col++) {
                if (cell.y + row >= 0 && cell.x + col >= 0 &&
                    cell.y + row < this.state.table.length &&
                    cell.x + col < this.state.table[0].length &&
                    this.state.table[cell.y + row][cell.x + col].mine &&
                    !(row === 0 && col === 0)) {
                    aroundMinesNum++;
                }
            }
        }
        return aroundMinesNum;
    }

    openAround(cell) {
        // for (let row = -1; row <= 1; row++) {
        //     for (let col = -1; col <= 1; col++) {
        //         if (cell.y + row >= 0 && cell.x + col >= 0 &&
        //             cell.y + row < this.state.table.length &&
        //             cell.x + col < this.state.table[0].length &&
        //             !this.state.table[cell.y + row][cell.x + col].hasMine &&
        //             !this.state.table[cell.y + row][cell.x + col].isOpened) {
        //             this.open(this.state.table[cell.y + row][cell.x + col]);
        //         }
        //     }
        // }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.table.map((row, index) => {
                            return <Row key={index} cells={row} open={this.open.bind(this)} mark={this.mark.bind(this)} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}
