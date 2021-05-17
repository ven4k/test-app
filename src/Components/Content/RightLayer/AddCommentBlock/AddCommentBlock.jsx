import React from "react";
import style from "./AddCommentBlock.module.css";
import CommentItem from "../CommentItem/CommentItem";
import {useSelector, useDispatch} from "react-redux";
import {deleteAllMessagesAC, sendMessageAC, updateNewMessageCommentBodyAC} from "../../../../redux/commentsReducer";

const AddCommentBlock = () => {
    const dispatch = useDispatch();
    const commentsBlock = useSelector(state => state.commentsBlock);
    const commentText = commentsBlock.commentText;


    let messageElements = commentsBlock.comments.map(m => <CommentItem message={m.message} views={m.views} id={m.id} />)
    let onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e) => {
       let messageBody = e.target.value;
        dispatch(updateNewMessageCommentBodyAC(messageBody));
    }
    let deleteAllMessages = () => {
        dispatch(deleteAllMessagesAC());
    }

  return (
     <div className={style.addCommentBlock}>
      <div>
         <h3>Добавить комментарий</h3>
     </div>
      <div>
         <textarea value={commentText} onChange={onNewMessageChange} placeholder='Введите сообщение' />
     </div>
      <div>
          <button onClick={onSendMessageClick}>Добавить</button>
      </div>
         <div>
             {messageElements}
         </div>
         <div>
             <button onClick={deleteAllMessages}>Удалить все сообщения</button>
         </div>
     </div>
  )
}

export default AddCommentBlock;