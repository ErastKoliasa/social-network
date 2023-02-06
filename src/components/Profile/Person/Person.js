import React, { useState } from 'react';
import PreLoader from '../../common/PreLoader/PreLoader';
import styles from './Person.module.css'
import photo from '../../../assets/img/avatar.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const Person = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
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
                {props.isOwner && <input className={styles.btnChangePhoto} type={"file"} onChange={onMainPhotoSelected} />}
            </div>
            {editMode ? <ProfileDataForm profile={props.profile} saveProfile={props.saveProfile}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}

const ProfileData = (props) => {
    return <div className={styles.containerPersonInfo}>
        <p className={styles.fullname}>{props.profile.fullName}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</p>
        {props.profile.lookingForAJob &&
            <p>My profesional skills: {props.profile.lookingForAJobDescription}</p>
        }
        <p className={styles.aboutMe}>About me: {props.profile.aboutMe}</p>
        <p>Contacts: {Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}</p>
        {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
    </div>

}

const Contacts = (props) => {
    return <p>{props.contactTitle}: {props.contactValue}</p>
}

export default Person;