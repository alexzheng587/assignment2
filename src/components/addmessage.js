import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let AddMessage = ({ dispatch }) => {
    let input;
    return (
        <div id="menu_side" className="panel">
            <h2>Enter Message Here</h2>
            <br />
            <form
                onSubmit={event => {
                    event.preventDefault();
                    // prevent adding empty string
                    if (input.value === "")
                        return;
                    dispatch(addMessage(input.value));
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

AddMessage = connect()(AddMessage);

export default AddMessage;