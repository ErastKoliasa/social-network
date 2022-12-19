import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const posts = props.posts.map(data => <Post post={data.post} key={data.id}/>)

    const newMyPost = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newMyPost.current.value;
        props.postChange(text);
    }

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.title}>My Posts</h3>
            <div className={styles.containerInputBtn}>
                <textarea ref={newMyPost} className={styles.textInput} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={onAddPost} className={styles.btnInput}>Add Post</button>
            </div>
            <div className={styles.postItem}>
                {posts}
            </div>
        </div>

    )
}
export default MyPosts;