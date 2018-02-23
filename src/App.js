import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table';

class App extends Component {

    addOpenNum() {
        // const { openTiles } = this.props;

        // if (openTiles === 0) {
            // this.interval = setInterval(this.tick, 1000);
        // }
        // return addTile();
    }

    render() {
        return <Table numRows={5} numCols={5} numMines={4} addOpenNum={this.addOpenNum.bind(this)}/>
        // return (<div><p>Hello World</p></div>);
    }
}

export default App;
