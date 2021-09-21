import React from 'react'
import styles from "./Friends.module.css"
import Friend from "../../UI/Friend/Friend"
import Button from "../../UI/Button/Button"

const Friends = (props) => {

    let pagesCount = props.totalFriendsCount / props.pageSize
    let pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    let friends = props.friends.map(friend => {
        return <Friend
            key={friend.id}
            name={friend.name}
            city={friend.city}
            status={friend.status}
        > {friend.followed
            ? <Button onClick={() => {
                props.toUnfollow(friend.id)
            }}>Удалить</Button>
            : <Button onClick={() => {
                props.toFollow(friend.id)
            }}>Добавить</Button>
        }</Friend>
    })

    return (
        <div>
            {
                pages.map(p => {
                    return <span
                        onClick={() => { props.onPageChanged(p) }}
                        className={props.currentPage === p && styles.selectedPage}
                    >{p}</span>
                })
            }
            {friends}
        </div>
    )
}

export default Friends
