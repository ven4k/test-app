import React from 'react';

const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_MESSAGE_COMMENT_BODY = 'UPDATE_NEW_MESSAGE_COMMENT_BODY';
const DELETE_ALL_MESSAGES = 'DELETE_ALL_MESSAGES';
const DELETE_TARGET_MESSAGE = 'DELETE_TARGET_MESSAGE';


let initState = {
    comments: [
        {
            id: 1,
            message: 'Hello',
            views: 500
        },
        {
            id: 2,
            message: 'nadoelo',
            views: 300
        }
    ],
    commentText: ""
};
const commentsReducer = (state = initState, action) => {
    let stateCopy = {...state}
    let messageBody = stateCopy.commentText;
    switch(action.type){
            case ADD_COMMENT:
                stateCopy.comments.push({id: Date.now(), message: messageBody, views: 0 });
                stateCopy.commentText = '';
                return stateCopy;
            case UPDATE_NEW_MESSAGE_COMMENT_BODY:
                stateCopy.commentText = action.messageBody;
                return stateCopy;
            case DELETE_ALL_MESSAGES:
                stateCopy.comments.splice(0)
                return stateCopy;
            case DELETE_TARGET_MESSAGE:
                stateCopy.comments = stateCopy.comments.filter(item => item.id !== action.payload);
                return stateCopy;
            default: return stateCopy;
        }
}
export const sendMessageAC = () => ({type: ADD_COMMENT });

export const updateNewMessageCommentBodyAC = (messageBody) => ({type: UPDATE_NEW_MESSAGE_COMMENT_BODY, messageBody: messageBody});

export const deleteAllMessagesAC = () => ({type: DELETE_ALL_MESSAGES});

export const deleteTargetMessageAC = (id) => ({type: DELETE_TARGET_MESSAGE, payload: id});

export default commentsReducer;