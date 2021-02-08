import React from 'react';
import style from './LeftLayer.module.css';

const LeftLayer = () => {
 return (
 <div className={style.leftLayer}>
        <div>
            <div className={style.leftImg_1}>
                <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d1/Ferrari-Logo.svg/800px-Ferrari-Logo.svg.png" alt="" />
            </div>
            <div className={style.leftItemText}>
                <span>Эмблема Ferrari — гарцующий жеребец на жёлтом фоне — впервые появилась на печатных материалах и официальных документах компании в 1929 году.</span>
            </div>
        </div>
        <div className={style.leftImg_2}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Dino_206.jpg" alt="" />
        </div>
    </div>
)
}

export default LeftLayer; 