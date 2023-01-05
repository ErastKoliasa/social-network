import React from 'react';
import { connect } from 'react-redux';
import { addNewPostActionCreator} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostTex: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addNewPostActionCreator(post)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;