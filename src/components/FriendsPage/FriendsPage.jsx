import React from "react"
import FriendsContainer from "./Friends/FriendsContainer";

const FriendsPage = (props) => {

    return (
        <div>
            <h1>Can be your friends!</h1>
            <FriendsContainer store={props.store}/>
        </div>
    )
}

export default FriendsPage