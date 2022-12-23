import React from "react";
import styles from "./Users.module.css"
import photo from '../../assets/img/avatar.png'

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
                        <img className={styles.avatar} src={user.photos.small == null ? photo : user.photos.small} alt="Personal photo of a person"></img>
                        {user.follow ? <button className={styles.userCardBtnUnFollow} onClick={() => props.unFollow(user.id)}>UNFOLLOW</button>
                            : <button className={styles.userCardBtnFollow} onClick={() => props.follow(user.id)}>FOLLOW</button>}
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