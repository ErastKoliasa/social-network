const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_LOADER";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 15,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: true,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, follow: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, follow: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_TOTAL_USERS:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUserActionCreator = (users) => ({ type: SET_USERS, users });
export const setTotalUsersActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS, totalUsersCount });
export const setCurrentPageActionCreator = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const toggleIsFeatchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgressActionCreator = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersPageReducer;