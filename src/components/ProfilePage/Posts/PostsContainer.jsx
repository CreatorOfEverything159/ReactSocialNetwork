import {connect} from "react-redux"
import Posts from "./Posts"

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, {})(Posts)
