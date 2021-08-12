import React from 'react';
import styles from './Header.module.css'
import logo from './logo.svg'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <a className={styles.header__logo}>
                        <img className={styles.logo__img} src={logo} height='40px'/>
                        <div className={styles.logo__name}>SocialNetwork</div>
                    </a>
                    <a className={styles.header__btnToProfile}>
                        <div className={styles.avatar__name}>Name</div>
                        <img className={styles.header__avatar} src="https://html5css.ru/w3images/avatar2.png"/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;