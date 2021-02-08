import React from 'react';
import style from './Header.module.css';
import ferrari from './ferrari.jpg';
import logo from './logo.png';


const Header = () => {
    return (
        <header className={style.header}>
				<a href="index.html">
					<img className={style.imgFirst} src={logo} alt="logo"/>
				</a>
				<nav className={style.navMenu}>
					<div className={style.item}>
							<a href="#">Profile</a>
							<a href="#">Menu</a>
							<a href="#">Work</a>
							<a href="#">About</a>
					</div>
				</nav>
				<div className={style.picture}>
					<div>
					<img src={ferrari} alt="ferrari" />
					</div>
				</div>
		</header>

    );
}

export default Header;