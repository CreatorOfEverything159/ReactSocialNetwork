import React from 'react'
import Friend from "../../UI/Friend/Friend"
import Button from "../../UI/Button/Button"
import * as axios from "axios"

class Friends extends React.Component {

    constructor(props) {
        super(props);
alert('new')
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setFriends(response.data.items)
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

    render() {
        return (
        <div>
            {this.friends()}
        </div>
    )
    }
}

// const Friends = (props) => {
//
//     if (!props.friends.length) {
//
//         axios
//             .get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 props.setFriends(response.data.items)
//             })
//     }
//
//     let friends = props.friends.map(friend => {
//         return <Friend
//             key={friend.id}
//             name={friend.name}
//             city={friend.city}
//             status={friend.status}
//         > {friend.followed
//             ? <Button onClick={() => {
//                 props.toUnfollow(friend.id)
//             }}>Удалить</Button>
//             : <Button onClick={() => {
//                 props.toFollow(friend.id)
//             }}>Добавить</Button>
//         }</Friend>
//     })
//
//     return (
//         <div>
//             {friends}
//         </div>
//     )
// }

export default Friends