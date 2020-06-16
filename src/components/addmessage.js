import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let AddMessage = ({ dispatch }) => {
    let input;
    let msg_obj;
    let username;
    let d = new Date();
    let date = d.getFullYear().toString() + "-" + d.getMonth().toString() + "-" + d.getDay().toString();
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
                    msg_obj = {
                        "message": input.value,
                        "date": date,
                        "username": username.value
                    };
                    dispatch(addMessage(msg_obj));
                    // reset value
                    input.value = ''; }}>
                <label htmlFor="uname"><b>Username</b></label>
                <input ref={node => {username = node}}
                    type="text" placeholder="Enter Username" name="uname" required/>
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