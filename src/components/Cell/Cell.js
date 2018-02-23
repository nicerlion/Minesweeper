import React, { Component } from 'react';
import './index.css';


export default class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasMine: props.mine || false,
            hasFlag: props.flag || false,
            isOpen: props.open || false,
            _meta: props._meta
        }

        // this.getContainerClasses = this.getContainerClasses.bind(this);
        this.open = this.open.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mine !== this.props.mine) {
            this.setState({ hasMine: this.props.mine });
        }
        if (prevProps.flag !== this.props.flag) {
            this.setState({ hasFlag: this.props.flag });
        }
        if (prevProps.open !== this.props.open) {
            this.setState({ isOpen: this.props.open });
        }
    }

    open(event) {
        this.props.onOpen && this.props.onOpen(this);
    }

    get cell() {
        if (this.state.isOpen) {
            if (this.state.hasMine) {
                return (
                    <div><span>Mine</span></div>
                )
            } else {
                return (<div><span>Open</span></div>);
            }
        } else if (this.state.hasFlag) {
            return (
                <div><span>Flag</span></div>
            )
        } else {
            return (<div><span>Simple</span></div>);
        }
    }

    render () {
        return (
            <td className="cell" onClick={this.open}>{this.cell}</td>
        );
    }
}