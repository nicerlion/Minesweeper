import React, { Component } from 'react';
import Cell from './../Cell/Cell';


export default class Row extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="row">
                {this.props.cells.map((cell, index) => {
                    return <Cell key={index} _meta={cell} open={cell.open} mine={cell.mine} onOpen={this.props.open} onMark={this.props.mark} />
                })}
            </tr>
        );
    }

}