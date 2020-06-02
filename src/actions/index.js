export const addMessage = ( messageText ) => {
    return({
        type : 'ADD_MESSAGE',
        messageText
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