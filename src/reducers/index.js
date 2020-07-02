import { combineReducers } from 'redux';

// const myObject = [
//         {
//             "message": "This is a preloaded message",
//             "date": "2020-6-7",
//             "username": "foolioxd"
//         },
//         {
//             "message": "Welcome to my Website!",
//             "date": "2020-5-12",
//             "username": "asdfparty"
//         },
//         {
//             "message": "Before you can begin to determine what the composition of a particular paragraph will be, you must first decide " +
//         "on an argument and a working thesis statement for your paper. What is the most important idea that you are trying " +
//         "to convey to your reader? The information in each paragraph must be related to that idea. In other words, your" +
//         " paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information" +
//         " in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. " +
//         "The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, " +
//         "familial relationships between all of the ideas in the paper.",
//             "date": "2020-1-1",
//             "username": "wh1sp3rr"
//         },
// ]

const initialState = [];

const messageListReducer = (state = initialState, action) => {		// set default in parameter list
    if (action.type === 'ADD_MESSAGE') {
        return state.concat ({
                message: action.message,
                date: action.date,
                username: action.username,
                _id: action.id
            })
    }
    // duplicate array
    let tmp = state.slice(0);
    if (action.type === 'DELETE_MESSAGE') {
        tmp.splice(action.messageId, 1);
        return tmp;
    }

    if (action.type === 'EDIT_MESSAGE') {
        tmp[action.messageId].message = action.newMessageText;
        return tmp;
    }

    if (action.type === 'SET_INITIAL_STATE') {
        tmp = action.initialMessages.data;
        return tmp;
    }
    // if (action.type === 'DELETE_ALL') {
    //     tmp = [];
    //     return tmp;
    // }
    return state;
}

export default combineReducers({
    messages: messageListReducer
});