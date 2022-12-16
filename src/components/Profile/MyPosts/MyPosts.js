import React from 'react';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    const posts = props.postsData.map(data => <Post post={data.post} />)

    const newMyPost = React.createRef();

    const addPost = () => props.dispatch(addNewPostActionCreator());

    const onPostChange = () => {
        const text = newMyPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.title}>My Posts</h3>
            <div className={styles.containerInputBtn}>
                <textarea ref={newMyPost} className={styles.textInput} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={addPost} className={styles.btnInput}>Add Post</button>
            </div>
            <div className={styles.postItem}>
                {posts}
            </div>
        </div>

    )
}
export default MyPosts;