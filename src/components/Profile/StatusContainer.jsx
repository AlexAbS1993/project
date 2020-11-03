import React from 'react';
import { connect } from 'react-redux';
import { Status } from './Status';
import { getStatusThunk, updateStatusThunk } from './../../redux/profilePageReducer'
import { withRouter } from 'react-router-dom';

export class StatusContainer extends React.Component {
    state = {
        isTyping: false,
        status: this.props.status,
        tempText: ""
    }

    changeTyping = () => {
        this.setState({
            isTyping: true
        })
    }
    changeReading = () => {
        this.setState({
            isTyping: false,
        })
        this.props.updateStatusThunk(this.state.status)
    }
    changeTemp = (i) => {
        this.setState({
            tempStatus: i
        })
        console.log(this.state)
    }
    changeTemp = (e) => {
        this.setState({
            status: e,
            tempText: e,
        }
        )
    };
    render() {
        return (
            <Status tempText={this.state.tempText} status={this.props.status} localestatus={this.state.status} changeTyping={this.changeTyping} changeReading={this.changeReading} isTyping={this.state.isTyping} changeTemp={this.changeTemp} />
        )
    }
}


