import React from 'react';
import style from './RightLayer.module.css';
import CommentItem from './CommentItem/CommentItem.jsx';
import RightLayerContent_1 from './RightLayerContent_1/RightLayerContent_1.jsx';
import RightLayerContent_2 from './RightLayerContent_2/RightLayerContent_2.jsx';
import RightLayerContent_3 from './RightLayerContent_3/RightLayerContent_3.jsx';
import AddCommentBlockContainer from './AddCommentBlock/AddCommentBlock.jsx';

const RightLayer = (props) => {

return (
    <div className={style.rightLayer}>
        <RightLayerContent_1 />
        <RightLayerContent_2 />
        <RightLayerContent_3 />
        <AddCommentBlockContainer />
    </div>
    );
}
export default RightLayer;
