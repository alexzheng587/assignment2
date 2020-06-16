import React, { Component } from 'react';
import Details from "./details";
import { connect } from 'react-redux';
import { deleteMessage } from '../actions'

class Message extends Component {
    render() {
        // using classname since id is taken up by messageId
        return (
            <div id={this.props.messageId} className="messageLine">
                <button onClick={() => this.props.deleteMessage(this.props.messageId)} type="button">Delete</button>
                <Details message={this.props.messageObj}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { message: state.message}
}

export default connect(mapStateToProps, { deleteMessage })(Message);