import React from 'react';
import PreLoader from '../../common/PreLoader/PreLoader';
import styles from './Person.module.css'
import photo from '../../../assets/img/avatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Person = (props) => {

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profile) {
        return <PreLoader />
    }

    const avatarPhoto = () => {
        if (!props.profile.photos.large) {
            return photo;
        }
        return props.profile.photos.large;
    }

    return (
        <div className={styles.person}>
            <div className={styles.containerPersonPhoto}>
                <img className={styles.personPhoto} src={avatarPhoto()}></img>
                {props.isOwner && <input className={styles.btnChangePhoto} type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
           
            <div className={styles.containerPersonInfo}>
                <p className={styles.fullname}>{props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <p className={styles.aboutMe}>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default Person;