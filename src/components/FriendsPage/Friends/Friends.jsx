import React from 'react'
import Friend from "../../UI/Friend/Friend"
import Button from "../../UI/Button/Button"
import * as axios from "axios"
import styles from './Friends.module.css'

class Friends extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
                this.props.setTotalUseresCount(response.data.totalCount)
            })
    }

    friends = () => this.props.friends.map(friend => {
        return <Friend
            key={friend.id}
            name={friend.name}
            city={friend.city}
            status={friend.status}
        > {friend.followed
            ? <Button onClick={() => {
                this.props.toUnfollow(friend.id)
            }}>Удалить</Button>
            : <Button onClick={() => {
                this.props.toFollow(friend.id)
            }}>Добавить</Button>
        }</Friend>
    })

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            })
    }

    render() {

        let pagesCount = this.props.totalFriendsCount / this.props.pageSize
        let pages = []
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1)
        }

        return (
            <div>
                {
                    pages.map(p => {
                        return <span
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                            className={this.props.currentPage === p && styles.selectedPage}
                        >{p}</span>
                    })
                }
                {this.friends()}
            </div>
        )
    }
}

export default Friends
