import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/authAPI';
import { setAuthUserDataActionCreator } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            const { id, email, login } = data.data;
            if (data.resultCode === 0) {
                this.props.setAuthUserData(id, email, login)
            }
        })
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
});

const mapDispatchToProps = (dispatch) => ({
    setAuthUserData: (userId, email, login) => dispatch(setAuthUserDataActionCreator(userId, email, login))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);