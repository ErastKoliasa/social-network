import React from 'react';
import { connect } from 'react-redux';
import { addNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostTex: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addNewPostActionCreator()),
        postChange: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;