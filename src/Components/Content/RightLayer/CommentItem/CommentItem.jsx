import React from 'react';
import style from './CommentItem.module.css';
import {useDispatch} from "react-redux";
import {deleteTargetMessageAC} from "../../../../redux/commentsReducer";

const CommentItem = (props) => {
    const dispatch = useDispatch();
    let deleteTargetMessage = () => {
        dispatch(deleteTargetMessageAC(props.id));
    }

    return (
    <div className={style.commentItem}>
        <div>
            <span>{props.message}</span>
        </div>
        <div>
            <span>{props.views}</span>
        </div>
        <div>
            <button onClick={deleteTargetMessage}>Удалить</button>
        </div>
    </div>
)
};
export default CommentItem;