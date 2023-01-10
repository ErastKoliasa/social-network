import React from 'react';
import { connect } from 'react-redux';
import {logoutThunkCreator} from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
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
    logout: () => dispatch(logoutThunkCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);