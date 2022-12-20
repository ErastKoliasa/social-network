import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    const users = props.users.map(user =>
        <div key={user.id} className={styles.userCard}>
            <div className={styles.containerPhotoBtn}>
                <img className={styles.avatar} src={user.photo}></img>
                {user.follow ? <button className={styles.userCardBtnUnFollow} onClick={() => props.unFollow(user.id)}>UNFOLLOW</button>
                    : <button className={styles.userCardBtnFollow} onClick={() => props.follow(user.id)}>FOLLOW</button>}
            </div>
            <div className={styles.containerUserInfo}>
                <div className={styles.containerNameStatus}>
                    <p className={styles.userName}>{user.fullName}</p>
                    <p className={styles.userStatus}>{user.status}</p>
                </div>
                <div className={styles.containerLocation}>
                    <p className={styles.userCountry}>{user.location.country}</p>
                    <p className={styles.userCity}>{user.location.city}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className={styles.users}>
            <h3 className={styles.title}>USERS</h3>
            {users}
        </div>
    )
}

export default Users;