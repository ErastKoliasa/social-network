import React from "react";
import styles from "./Users.module.css"
import photo from '../../assets/img/avatar.png'
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.userCard}>
            <div className={styles.containerPhotoBtn}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img className={styles.avatar} src={props.user.photos.small == null ? photo : props.user.photos.small} alt="Personal photo of a person"></img>
                </NavLink>
                {props.user.follow ? <button className={styles.userCardBtnUnFollow}
                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                    onClick={() => { props.unFollow(props.user.id) }}>UNFOLLOW
                </button>
                    : <button className={styles.userCardBtnFollow}
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => { props.follow(props.user.id) }}>FOLLOW
                    </button>}
            </div>
            <div className={styles.containerUserInfo}>
                <div className={styles.containerNameStatus}>
                    <p className={styles.userName}>{props.user.name}</p>
                    <p className={styles.userStatus}>{props.user.status}</p>
                </div>
                <div className={styles.containerLocation}>
                    <p className={styles.userCountry}>{'user.location.country'}</p>
                    <p className={styles.userCity}>{"user.location.city"}</p>
                </div>
            </div>
        </div>
    )
}

export default User