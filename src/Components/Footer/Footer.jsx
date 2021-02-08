import React from 'react';
import style from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={style.footer}>
	    <div className={style.footerContent}>
	    	<div className={style.footerMainImage}>
	    		<img src="https://wallpapercave.com/wp/wp5433171.jpg" alt="" />
	    	</div>
	    	<div className={style.footerMainImage}>
	    		<img src="https://mir-s3-cdn-cf.behance.net/projects/original/5fcc9045804147.Y3JvcCw1NTMsNDMzLDE3NiwyNzg.jpg" alt="" />
	    	</div>
	    	<div className={style.footerInfo}>
	    		<div className={style.footerLinks}>
	    			<a href="#">
	    				<img className={style.img_1} src="https://i1.sndcdn.com/avatars-000203117495-t0og75-t500x500.jpg" alt="YouTube" />
	    			</a>
	    			<a href="#">
	    				<img className={style.img_2} src="https://extiverse.com/assets/extension-icon/689169a1-c15c-4e28-b47c-583ff11693ec.png" alt="VK" />
	    			</a>
	    			<a href="#">
	    				<img className={style.img_3} src="https://pbs.twimg.com/media/CAlgJhrWoAAQgKi.png" alt="Twitter" />
	    			</a>
	    			<a href="#">
	    				<img className={style.img_4} src="https://shiva.blog/wp-content/uploads/2020/07/telegrambots-500x500.jpeg" alt="Telegram" />
	    			</a>
	    		</div>
	    		<div className={style.footerLogo}>
	    			<img src="http://missionmees.nl/wp-content/uploads/2017/04/logo_ferrari-393x140.png" alt="" />
	    		</div>
	    	</div>
    	</div>	
    	</footer>
    )
}

export default Footer;