import React from "react";
import styles from "./Login.module.css"
import { Form, Field } from 'react-final-form'
import { Input } from "../common/FormsControls/FormsControls";
import { composeValidators, maxLength, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
const LoginForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <div>
                        <Field name="email" component={Input}
                            placeholder="email"
                            validate={composeValidators(required, maxLength(240))}
                            className={styles.inputLogin} />
                    </div>
                    <div>
                        <Field name="password" component={Input} type="password"
                            placeholder="password"
                            validate={composeValidators(required, maxLength(240))}
                            className={styles.inputLogin} />
                    </div>
                    <div className={styles.checkboxLogin}>
                        <Field name="rememberMe" component="input" type="checkbox" /> Remember me?
                    </div>
                    <div>
                        <button className={styles.btnLogin}>Login</button>
                    </div>
                </form>
            )}
        </Form>
    )
}

const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }
    return (
        <div className={styles.loginPage}>
            <h1 className={styles.title}>LOGIN</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => dispatch(loginThunkCreator(email, password, rememberMe)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);