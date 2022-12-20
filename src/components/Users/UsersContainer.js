import { connect } from "react-redux";
import { followActionCreator, setUserActionCreator, unFollowActionCreator } from "../../redux/usersPageReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followActionCreator(userId)),
        unFollow: (userId) => dispatch(unFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUserActionCreator(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;