import React, { Component } from 'react';
import Cell from './../Cell/Cell';


export default class Row extends Component {

    render() {
        return (
            <tr className="row">
                {this.props.cells.map((cell, index) => {
                    return <Cell key={index} _meta={cell} open={cell.open} mine={cell.mine} flag={cell.flag} onOpen={this.props.open} onMark={this.props.mark} />
                })}
            </tr>
        );
    }

}