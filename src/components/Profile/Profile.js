import React from 'react';
import styles from './Profile.module.css'
import Person from './Person/Person';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <Person />
      <MyPosts postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText} />
    </main>
  )
}

export default Profile;