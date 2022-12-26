import React from "react";
import styles from "./Users.module.css"
import photo from '../../assets/img/avatar.png'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/usersAPI";

const Users = (props) => {
    const pages = [];
    let countPages = Math.ceil(props.totalUsersCount / props.pageSize);
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={styles.users}>
            <div className={styles.usersHeader}>
                <h3 className={styles.title}>USERS</h3>
                <div className={styles.containerPages}>
                    {slicedPages.map(page => {
                        return <span className={styles.pages}>
                            <span onClick={() => { props.onChangePage(page) }} className={props.currentPage === page && styles.page}>
                                {page}
                            </span>
                        </span>
                    })}
                </div>
            </div>
            {props.loader()}
            {props.users.map(user =>
                <div key={user.id} className={styles.userCard}>
                    <div className={styles.containerPhotoBtn}>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={styles.avatar} src={user.photos.small == null ? photo : user.photos.small} alt="Personal photo of a person"></img>
                        </NavLink>
                        {user.follow ? <button className={styles.userCardBtnUnFollow}
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.toggleIsFollowinProgress(true, user.id)
                                usersAPI.unFollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollow(user.id)
                                    }
                                    props.toggleIsFollowinProgress(false, user.id)
                                });
                            }}>UNFOLLOW</button>
                            : <button className={styles.userCardBtnFollow}
                                disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.toggleIsFollowinProgress(true, user.id)
                                    usersAPI.follow(user.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(user.id);
                                        }
                                        props.toggleIsFollowinProgress(false, user.id)
                                    });
                                }}>FOLLOW</button>}
                    </div>
                    <div className={styles.containerUserInfo}>
                        <div className={styles.containerNameStatus}>
                            <p className={styles.userName}>{user.name}</p>
                            <p className={styles.userStatus}>{user.status}</p>
                        </div>
                        <div className={styles.containerLocation}>
                            <p className={styles.userCountry}>{'user.location.country'}</p>
                            <p className={styles.userCity}>{"user.location.city"}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users