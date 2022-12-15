import React from 'react';
import styles from './Post.module.css'
import avatar from '../../img/avatar.png'

const Post = (props) => {
    return (
        <div className={styles.posts}>
            <div className={styles.containerAvatar}>
                <img src={avatar} alt="Personal photo of a person" className={styles.avatar}></img>
            </div>
            <div className={styles.postItem}>
                {props.post}
            </div>
        </div>
    )
}

export default Post;