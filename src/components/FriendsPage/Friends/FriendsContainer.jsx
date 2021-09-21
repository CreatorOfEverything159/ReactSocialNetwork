import {connect} from 'react-redux'
import { follow, setCurrentPage, setFriends,
    setTotalUsersCount, toggleIsFetching, unfollow } from '../../../redux/friendsReducer'
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
                this.props.setTotalUsersCount(response.data.totalCount)
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
                    toUnfollow={this.props.unfollow}
                    toFollow={this.props.follow}
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

export default connect(mapStateToProps,
    { follow,  unfollow,  setFriends,  setCurrentPage,  setTotalUsersCount,  toggleIsFetching })
(FriendsContainer)
