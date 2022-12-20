import photo from '../components/Profile/img/avatar.png'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: [
        { id: 1, photo: photo, follow: false, fullName: "Taras K.", status: "I'm a boss", location: { city: "Lviv", country: "Ukraine" } },
        { id: 2, photo: photo, follow: false, fullName: "Roman B.", status: "I'm a boss", location: { city: "Lviv", country: "Ukraine" } },
        { id: 3, photo: photo, follow: true, fullName: "Nikita M.", status: "I'm a boss", location: { city: "Berlin", country: "Germany" } },
        { id: 4, photo: photo, follow: false, fullName: "Ruslan P.", status: "I'm a boss", location: { city: "Lviv", country: "Ukraine" } }
    ]
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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId: userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUserActionCreator = (users) => ({ type: SET_USERS, users: users })

export default usersPageReducer;