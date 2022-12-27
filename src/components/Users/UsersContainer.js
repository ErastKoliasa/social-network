import React from "react";
import { connect } from "react-redux";
import {followThunkCreator, getUsersThunkCreator, onChangePageThunkCreator, unfollowThunkCreator } from "../../redux/usersPageReducer";
import Users from "./Users";
import PreLoader from "../PreLoader/PreLoader";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.onChangePageThunkCreator(pageNumber, this.props.pageSize)   
    }

    onLoader = () => {
        return this.props.isFetching ? <PreLoader /> : null
    }

    render() {
        return (
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                loader={this.onLoader}
                followingInProgress={this.props.followingInProgress}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followThunkCreator(userId)),
        unFollow: (userId) => dispatch(unfollowThunkCreator(userId)),
        getUsersThunkCreator: (currentPage, pageSize) => dispatch (getUsersThunkCreator(currentPage, pageSize)),
        onChangePageThunkCreator: (pageNumber, pageSize) => dispatch(onChangePageThunkCreator(pageNumber, pageSize)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;