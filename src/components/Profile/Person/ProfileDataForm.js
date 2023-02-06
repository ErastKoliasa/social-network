import React from "react"
import { Field, Form } from "react-final-form";
import { Input, TextArea } from "../../common/FormsControls/FormsControls";

const MyForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <p>
                        <Field name="fullName" component={Input} placeholder="Full Name"/>
                    </p>
                    <p>
                        Looking for a job: 
                        <Field name="lookingForAJob" component={Input} type="checkbox"/>
                    </p>
                    <p>
                        My profesional skills:
                        <Field name="lookingForAJobDescription" component={TextArea} placeholder="My profesional skills"/>
                    </p>
                    <p>About me:
                        <Field name="aboutMe" component={TextArea} placeholder="About me"/>
                    </p>
                    {/* <p>Contacts: {Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}</p> */}
                    <button onClick={() => { }}>Save</button>
                </form>
            )}
        </Form>
    )
}

const ProfileDataForm = (props) => {
    const onSubmit = (formData) => {
        props.saveProfile(formData)
     }
    return (
        <div>
            <MyForm onSubmit={onSubmit} profile={props.profile} />
        </div>
    )
}

export default ProfileDataForm;