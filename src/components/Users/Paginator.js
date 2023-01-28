import React from "react";
import styles from "./Users.module.css"

const Paginator = (props) => {
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
    )
}

export default Paginator;