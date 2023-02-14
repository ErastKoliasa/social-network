import React from "react";
import { Field, Form } from "react-final-form";
import { composeValidators, maxLength, required } from "../../../utils/validators/validators";
import { Input, TextArea } from "../../common/FormsControls/FormsControls";
import styles from './Person.module.css'

const MyForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <p>
                        <b className={styles.infoTitle}>My name is:</b>
                        <Field className={styles.input} name="fullName" component={Input} placeholder="Full Name"
                               validate={composeValidators(required, maxLength(240))}/>
                    </p>
                    <p>
                        <b className={styles.infoTitle}>Looking for a job:</b>
                        <Field name="lookingForAJob" component={Input} type="checkbox"/>
                    </p>
                    <p>
                        <b className={styles.infoTitle}>My profesional skills:</b>
                        <Field className={`${styles.input} ${styles.textArea}`} name="lookingForAJobDescription" component={TextArea} placeholder="My profesional skills"
                               validate={composeValidators(required, maxLength(240))}/>
                    </p>
                    <p>
                        <b className={styles.infoTitle}>About me:</b>
                        <Field className={`${styles.input} ${styles.textArea}`} name="aboutMe" component={TextArea} placeholder="About me"
                               validate={composeValidators(required, maxLength(240))}/>
                    </p>
                    <p>
                        <b className={styles.infoTitle}>Contacts:</b>
                        {Object.keys(props.profile.contacts).map(key => {
                             return <div key={key}>
                                {key}:
                                <Field className={styles.input} name={`contacts.${key}`} component={Input} placeholder={key}/>
                             </div>
                             })
                        }
                    </p>
                    <button className={styles.btn}>Save</button>
                </form>
            )}
        </Form>
    )
}

const ProfileDataForm = (props) => {
    return (
        <div>
            <MyForm onSubmit={props.onSubmit} profile={props.profile}/>
        </div>
    )
}

export default ProfileDataForm;