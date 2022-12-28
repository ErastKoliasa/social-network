import React from 'react';
import PreLoader from '../../PreLoader/PreLoader';
import styles from './Person.module.css'
import photo from '../../../assets/img/avatar.png'
const Person = (props) => {
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
            </div>
            <div className={styles.containerPersonInfo}>
                <p className={styles.fullname}>{props.profile.fullName}</p>
                <p className={styles.aboutMe}>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default Person;