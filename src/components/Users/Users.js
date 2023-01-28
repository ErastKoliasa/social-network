import React from "react";
import styles from "./Users.module.css"
import Paginator from "./Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={styles.users}>
            <Paginator currentPage={props.currentPage} onChangePage={props.onChangePage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
            {props.loader()}
            {props.users.map(user => <User user={user}
                followingInProgress={props.followingInProgress}
                unFollow={props.unFollow}
                follow={props.follow}
                key={user.id} />
            )}
        </div>
    )
}

export default Users