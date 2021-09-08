const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'

let initialState = {
    friends: [

    ],
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
            return {...state, friends: [...state.friends, ...action.friends]}
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