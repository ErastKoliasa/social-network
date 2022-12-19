import React from 'react';
import styles from './Profile.module.css'
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  return (
    <main className={styles.main}>
      <Person />
      <MyPostsContainer />
    </main>
  )
}

export default Profile;