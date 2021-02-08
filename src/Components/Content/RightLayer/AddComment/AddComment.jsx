import React from 'react';
import style from './AddComment.module.css';
import CommentItem from '../CommentItem/CommentItem.jsx';   

const AddComment = (props) => {
  let commentElements = props.state.map(c => <CommentItem message={c.message} likes={c.likes} id={c.id} />);  

  let textArea = React.createRef();
  
  let SetNewComment = () => {
    let text = textArea.current.value;
    props.addNewComment(text);
}
  
  
  return (
          <div>
            <div className={style.addComment}>
                      <h3>Добавить комментарий</h3>
                      <textarea ref={textArea} name="" id="" rows="3">  
                      </textarea>
                      <button onClick={SetNewComment}>
                      Отправить
                      </button>
             </div>
             <div className={style.commentMessage}>
                {commentElements}
             </div>
          </div>         

          )
}

export default AddComment;