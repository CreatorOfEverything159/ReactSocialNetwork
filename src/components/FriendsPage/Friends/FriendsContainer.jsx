import {connect} from 'react-redux'
import {
    followAC,
    setCurrentPageAC,
    setFriendsAC,
    setTotalUsersCountAC, toggleIsFetchingAC,
    unfollowAC
} from '../../../redux/friendsReducer'
import React from 'react'
import * as axios from 'axios'
import Friends from './Friends'
import Preloader from '../../UI/Preloader/Preloader'

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setFriends(response.data.items)
                this.props.setTotalUseresCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setFriends(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends
                    totalFriendsCount={this.props.totalFriendsCount}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    friends={this.props.friends}
                    toUnfollow={this.props.toUnfollow}
                    toFollow={this.props.toFollow}
                    currentPage={this.props.currentPage}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
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
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)
