import React from "react";
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersActionCreator, setUserActionCreator, toggleIsFeatchingActionCreator, unFollowActionCreator } from "../../redux/usersPageReducer";
import axios from "axios";
import Users from "./Users";
import PreLoader from "../PreLoader/PreLoader";


class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            });
    }

    onChangePage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
            loader={this.onLoader}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unFollow: (userId) => dispatch(unFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUserActionCreator(users)),
        setTotalUsers: (totalUsers) => dispatch(setTotalUsersActionCreator(totalUsers)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFeatchingActionCreator(isFetching))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;