import React from 'react';
import styles from './Profile.module.css'
import Person from './Person/Person';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <Person isOwner={props.isOwner} 
              profile={props.profile} 
              status={props.status} 
              updateStatus={props.updateStatus} 
              savePhoto={props.savePhoto}/>
      <MyPostsContainer />
    </main>
  )
}

export default Profile;