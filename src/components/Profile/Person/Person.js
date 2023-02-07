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

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
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
            {editMode ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}

const ProfileData = (props) => {
    return <div className={styles.containerPersonInfo}>
        <p className={styles.fullname}>{props.profile.fullName}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>
            <b className={styles.infoTitle}>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </p>
        {props.profile.lookingForAJob &&
            <p>
                <b className={styles.infoTitle}>My profesional skills:</b> {props.profile.lookingForAJobDescription}
            </p>
        }
        <p>
            <b className={styles.infoTitle}>About me:</b> {props.profile.aboutMe}
        </p>
        <p>
            <b className={styles.infoTitle}>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </p>
        {props.isOwner && <button className={styles.btn} onClick={props.goToEditMode}>Edit</button>}
    </div>

}

const Contacts = (props) => {
    return <p>{props.contactTitle}: {props.contactValue}</p>
}

export default Person;