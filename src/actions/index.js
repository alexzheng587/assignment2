export const addMessage = (messageObj ) => {
    return({
        type : 'ADD_MESSAGE',
        messageObj: messageObj
    });
};

export const deleteMessage = ( messageId ) => {
    return({
        type : 'DELETE_MESSAGE',
        messageId
    });
};

export const deleteAll = () => {
    return({
        type : 'DELETE_ALL'
    });
};