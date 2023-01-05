import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <img src={logo} alt='logo site' className={styles.logo}></img>
            </div>
            <div className={styles.containerlogin}>
                {props.isAuth ? <div className={styles.login}>{props.email} - <button onClick={props.logout} className={styles.btnLogout}>Logout</button></div>
                    : <NavLink to={'/login'} className={styles.login}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;