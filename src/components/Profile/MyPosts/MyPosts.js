import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, maxLength, required } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';
import styles from './MyPosts.module.css'
import Post from './Post/Post';


const MyPostsForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} >
                    <div className={styles.containerInputBtn}>
                        <Field name="post"
                            component={TextArea}
                            placeholder="Enter your post"
                            validate={composeValidators(required, maxLength(240))}
                            className={styles.textInput} />
                        <button className={styles.btnInput}>Add Post</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

const MyPosts = React.memo(props => {
    const posts = props.posts.map(data => <Post post={data.post} key={data.id} />)

    const addNewPost = (value) => {
        props.addPost(value.post)
    }

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.title}>My Posts</h3>
            <MyPostsForm onSubmit={addNewPost} />
            <div className={styles.postItem}>
                {posts}
            </div>
        </div>

    )
})
export default MyPosts;