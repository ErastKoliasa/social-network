import React from 'react';
import styles from './Header.module.css'
import logo from './img/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <img src={logo} alt='logo site' className={styles.logo}></img>
            </div>
        </header>
    )
}

export default Header;