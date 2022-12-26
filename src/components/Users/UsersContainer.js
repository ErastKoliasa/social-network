import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersActionCreator, setUserActionCreator, toggleIsFeatchingActionCreator, toggleIsFollowingProgressActionCreator, unFollowActionCreator } from "../../redux/usersPageReducer";
import Users from "./Users";
import PreLoader from "../PreLoader/PreLoader";
import { usersAPI } from "../../api/usersAPI";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUsers(data.totalCount)
            });
    }

    onChangePage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowinProgress={this.props.toggleIsFollowinProgress} />
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
        follow: (userId) => dispatch(followActionCreator(userId)),
        unFollow: (userId) => dispatch(unFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUserActionCreator(users)),
        setTotalUsers: (totalUsers) => dispatch(setTotalUsersActionCreator(totalUsers)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFeatchingActionCreator(isFetching)),
        toggleIsFollowinProgress:(isFetching, userId) => dispatch(toggleIsFollowingProgressActionCreator(isFetching, userId))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;