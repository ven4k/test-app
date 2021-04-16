import React from 'react';

const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_MESSAGE_COMMENT_BODY = 'UPDATE_NEW_MESSAGE_COMMENT_BODY';


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
                stateCopy.comments.push({id: 3, message: messageBody, views: 543});
                stateCopy.commentText = '';
                return stateCopy;
            case UPDATE_NEW_MESSAGE_COMMENT_BODY:
                stateCopy.commentText = action.messageBody;
                return stateCopy;
            default: return stateCopy;
        }
}
export const sendMessageAC = () => ({type: ADD_COMMENT })

export const updateNewMessageCommentBodyAC = (messageBody) => ({type: UPDATE_NEW_MESSAGE_COMMENT_BODY, messageBody: messageBody})

export default commentsReducer;