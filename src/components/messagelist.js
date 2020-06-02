import React from 'react';
import Message from './message'
import { connect } from 'react-redux';

class MessageList extends React.Component {
    render() {
        return (
            <div id="messageList">
                {this.props.messages.map((message, index) => (
                    <Message key={index} messageText={message} messageId={index} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { messages: state.messages}
}

export default connect(mapStateToProps)(MessageList);