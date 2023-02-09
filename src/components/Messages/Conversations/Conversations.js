import React from "react";
import { NavLink } from "react-router-dom";
import photo from "../../../assets/img/avatar.png"
import styles from '../Messages.module.css'

const Conversations = (props) => {
    const path = '/messages/' + props.id
    return (
        <div className={styles.conversationsItem}>
            <img src={photo} className={styles.avatar}></img>
            <NavLink to={path} className={styles.link}>{props.name}</NavLink>
        </div>
    )
}
export default Conversations; 