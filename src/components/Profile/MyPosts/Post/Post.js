import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            {props.post}
        </div>
    )
}

export default Post;