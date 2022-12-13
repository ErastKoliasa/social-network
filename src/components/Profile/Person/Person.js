import React from 'react';
import styles from './Person.module.css'
const Person = () => {
    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <div className={styles.containerPhoto}>
                    <img className={styles.headerPhoto}></img>
                </div>
            </header>
            <div className={styles.person}>
                <div className={styles.containerPersonPhoto}>
                    <img className={styles.personPhoto}></img>
                </div>
                <div className={styles.containerPersonInfo}>
                    <p className={styles.personInfo}></p>
                </div>
            </div>
        </div>
    )
}

export default Person;