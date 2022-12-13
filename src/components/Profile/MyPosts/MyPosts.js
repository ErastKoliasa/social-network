import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const posts = props.state.postsData.map(data => <Post post={data.post} />)
    return (
        <div className={styles.myPosts}>
            <textarea></textarea>
            <button>Add Post</button>
            {posts}
        </div>

    )
}
export default MyPosts;