import React from "react";
import { editMessage } from '../actions'
import store from "../index";
import { connect } from 'react-redux'

class EditMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    toggleEdit = () => {
        this.setState(state => ({ visible: !state.visible }));
    };

    render() {
        let input;
        if (this.state.visible) {
            return (
                <div id="details" className="panel">
                    <button onClick={this.toggleEdit}>Stop Editing</button>
                    <form
                        onSubmit={event => {
                            event.preventDefault();
                            // prevent adding empty string
                            if (input.value === "")
                                return;
                            store.dispatch(editMessage(this.props.message, input.value, this.props.messageId));
                            // reset value
                            input.value = ''; }}>
                        <textarea
                            ref={node => {
                                input = node
                            }}
                            className="text_input"/>
                        <input type="reset" value="Clear" className="control"/>
                        <input type="submit" value="Add" className="control"/>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="messageLine">
                    <button onClick={this.toggleEdit}>Edit Message</button>
                </div>
            )
        }
    }
}

export default connect()(EditMessage);