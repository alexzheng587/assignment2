// export const addMessage = (messageObj ) => {
//     return({
//         type : 'ADD_MESSAGE',
//         messageObj: messageObj
//     });
// };

export function addMessage(text, username = "Anonymous", timestamp) {
    return (dispatch) => {
        const message = {
            message: text,
            date: timestamp,
            username: username
        };
        fetch("/api/message", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(message),
        })
            .then(response => {
                if (response.status !== 201) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json()
                    .then(data => {
                        console.log(data);
                        dispatch(addToList(text, username, timestamp, data["id"]["_id"]))
                    })
            });
    }
}

export const addToList = (text, username, timestamp, id) => {
    const message = {
        message: text,
        date: timestamp,
        username: username,
        _id: id
    };
    return ({
        ...message,
        type : 'ADD_MESSAGE',
    })
}

export const loadMessages = () => dispatch => {
    return fetch(`/api/message`)
        .then(res =>
            res.json()
                .then(
                    data => dispatch({ type: 'LOAD_SOME_DATA_SUCCESS', data }),
                    err => dispatch({ type: 'LOAD_SOME_DATA_FAILURE', err })
                ))
        .catch((err) => console.error(err));
};

export const deleteMessage = ( messageId, id ) => {
    fetch('/api/message/' + id, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    }).then(res => res);
    return({
        type : 'DELETE_MESSAGE',
        messageId
    });
};

export const deleteAll = () => {
    fetch('/api/delete/', {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    });
    return({
        type : 'DELETE_ALL'
    });
};

export const editMessage = (oldMessage, newMessageText, messageId) => {
    const editedMessage = {
        ...oldMessage,
        message: newMessageText
    }
    fetch('/api/message/' + oldMessage["_id"], {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(editedMessage)
    });
    return {
        type: "EDIT_MESSAGE",
        editedMessage,
        messageId
    }
};

export const setInitialMessagesState = (initialMessages) => {
    return {
        type: "SET_INITIAL_STATE",
        initialMessages
    }
}