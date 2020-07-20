import React from 'react';
import MessageList from './messagelist';
import { deleteAll } from "../actions";
import {connect} from "react-redux";

class Panel extends React.Component {
    render() {
        return (
            <div id="content_side" className="panel">
                <h2>Messages</h2>
                <button onClick={() => this.props.deleteAll()} type="button">Clear Message List</button>
                <MessageList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { messages: state.messages}
}

export default connect(mapStateToProps, { deleteAll })(Panel);