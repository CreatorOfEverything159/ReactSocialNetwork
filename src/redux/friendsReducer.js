const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    friends: [],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
}

export const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.friendID)
                        return {...friend, followed: true}
                    return friend
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.friendID)
                        return {...friend, followed: false}
                    return friend
                })
            }
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalFriendsCount: action.totalFriendsCount}
        default:
            return state
    }
}

export const followAC = (friendID) => {
    return {type: FOLLOW, friendID}
}

export const unfollowAC = (friendID) => {
    return {type: UNFOLLOW, friendID}
}

export const setFriendsAC = (friends) => {
    return {type: SET_FRIENDS, friends}
}

export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage: page}
}

export const setTotalUseresCountAC = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalFriendsCount: totalCount}
}
