import React from 'react';
import style from './Content.module.css';
import RightLayer from './RightLayer/RightLayer.jsx';
import LeftLayer from './LeftLayer/LeftLayer.jsx';


const Content = (props) => {

return (
<div>
<main className={style.main}>
  <LeftLayer /> 
  <RightLayer />
</main>
</div>
)
}

export default Content;