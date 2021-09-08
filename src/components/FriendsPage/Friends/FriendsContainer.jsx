import {connect} from "react-redux"
import {followAC, setFriendsAC, unfollowAC} from "../../../redux/friendsReducer"
import Friends from "./Friends"

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (friendID) => {
            dispatch(followAC(friendID))
        },
        toUnfollow: (friendID) => {
            dispatch(unfollowAC(friendID))
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer