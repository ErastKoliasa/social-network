import React from 'react';
import styles from './Profile.module.css'
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <Person profile={props.profile} isAuth={props.isAuth}/>
      <MyPostsContainer />
    </main>
  )
}

export default Profile;