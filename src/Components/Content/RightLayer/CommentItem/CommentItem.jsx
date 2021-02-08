import React from 'react';
import style from './CommentItem.module.css';

const CommentItem = (props) => {
 
    return (
    <div className={style.commentItem}>
    	<div>
    	<span>{props.message}</span>
    	</div>
    	<div>
    	<span>{props.likes}</span>
    	</div>
    </div>
)
};
export default CommentItem;