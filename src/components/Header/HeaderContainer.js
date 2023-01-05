import React from 'react';
import { connect } from 'react-redux';
import {getAuthUserDataThunkCreator, logoutThunkCreator} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
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
    getAuthUserData: () => dispatch(getAuthUserDataThunkCreator()),
    logout: () => dispatch(logoutThunkCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);