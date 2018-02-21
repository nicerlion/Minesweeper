import React, { Component } from 'react';


export default class Cell extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasMine: props.mine || false,
            hasFlag: props.flag || false,
            isOpen: props.open || false
        }

        this.getContainerClasses = this.getContainerClasses.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mine !== this.props.mine) {
            this.setState({ hasMine: this.props.mine });
        }
        if (prevProps.flag !== this.props.flag) {
            this.setState({ hasFlag: this.props.flag });
        }
    }

    open(event) {
        this.props.open && this.props.open(this);
        this.setState({ isOpen: true });
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
            <div onClick={this.open}>{this.cell}</div>
        );
    }
}