import { combineReducers } from 'redux';

const myObject = {
    messages:[
        "This is a preloaded message",
        "Welcome to my Website!",
        "Before you can begin to determine what the composition of a particular paragraph will be, you must first decide " +
        "on an argument and a working thesis statement for your paper. What is the most important idea that you are trying " +
        "to convey to your reader? The information in each paragraph must be related to that idea. In other words, your" +
        " paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information" +
        " in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. " +
        "The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, " +
        "familial relationships between all of the ideas in the paper."
    ]
}

const messageListReducer = (messages = myObject.messages, action) => {		// set default in parameter list
    if (action.type === 'ADD_MESSAGE') {
        return messages.concat(action.messageText);
    }
    let tmp = messages.slice(0);
    if (action.type === 'DELETE_MESSAGE') {
        tmp.splice(action.messageId, 1);
        return tmp;
    }
    if (action.type === 'DELETE_ALL') {
        tmp = [];
        return tmp;
    }
    return myObject.messages;
};

export default combineReducers({
    messages: messageListReducer
});