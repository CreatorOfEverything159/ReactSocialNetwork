import {connect} from "react-redux"
import {
    followAC,
    setCurrentPageAC,
    setFriendsAC,
    setTotalUseresCountAC,
    unfollowAC
} from "../../../redux/friendsReducer"
import Friends from "./Friends"

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUseresCount: (totalCount) => {
            dispatch(setTotalUseresCountAC(totalCount))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
