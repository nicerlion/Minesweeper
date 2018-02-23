import React, { Component } from 'react';
import './index.css';
import mineImage from './assets/img/mine.png';
import flagImage from './assets/img/flag.png';
import transparentImage from './assets/img/transparent.png';


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
                    <div style={{'textAlign': 'center'}}><img alt="img" src={mineImage} width="30" height="30" /></div>
                )
            } else {
                return (<div style={{ 'textAlign': 'center' }}><img alt="img" src={transparentImage} width="30" height="30" /></div>);
            }
        } else if (this.state.hasFlag) {
            return (
                <div style={{ 'textAlign': 'center' }}><img alt="img" src={flagImage} width="30" height="30" /></div>
            )
        } else {
            return (<div style={{ 'textAlign': 'center' }}><img alt="img" src={transparentImage} width="30" height="30" /></div>);
        }
    }

    render () {
        return (
            <td className={'cell ' + (this.state.isOpen ? 'opened': '')} onClick={this.open}>{this.cell}</td>
        );
    }
}