import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
const NavBar = () => {
    const classActive = navData => navData.isActive ? styles.active : styles.link
    return (
        <aside className={styles.sidePanel}>
            <nav className={styles.nav}>
                <ul className={styles.listNav}>
                    <li className={styles.listItem}> <NavLink to={'/profile'} className={classActive} >Profile</NavLink></li>
                    <li className={styles.listItem}> <NavLink to={'/messages'} className={classActive}>Messages</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavBar;