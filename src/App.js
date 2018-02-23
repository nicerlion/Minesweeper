import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numCols: 10,
            numRows: 10,
            numMines: 5
        }
    }

    onInit(table) {
        this.table = table;
    }

    reset() {
        this.table.reset();
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <label>Set Number of Columns:</label>
                        <input type="number" value={this.state.numCols} onChange={event => this.setState({ numCols: event.target.value })} />
                    </div>
                    <div>
                        <label>Set Number of Rows:</label>
                        <input type="number" value={this.state.numRows} onChange={event => this.setState({ numRows: event.target.value })} />
                    </div>
                    <div>
                        <label>Set Number of Mines:</label>
                        <input type="number" value={this.state.numMines} onChange={event => this.setState({ numMines: event.target.value })} />
                    </div>
                    <div style={{ 'textAlign': 'center', 'width': '100%' }}>
                        <button className="button-restart" onClick={this.reset.bind(this)}>SET</button>
                    </div>
                </div>
                <div style={{ 'textAlign': 'center', 'width': '100%' }}>
                    <Table onInit={this.onInit.bind(this)} numRows={this.state.numRows} numCols={this.state.numCols} numMines={this.state.numMines} />
                </div>
                <div style={{ 'textAlign': 'center', 'width': '100%' }}>
                    <button className="button-restart" onClick={this.reset.bind(this)}>RESTART</button>
                </div>
            </div>
        );
    }
}

export default App;
