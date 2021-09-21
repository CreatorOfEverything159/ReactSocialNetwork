import {addPost, updateNewPostText} from "../../../redux/profileReducer"
import CreatePost from "./CreatePost"
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps,
    {updateNewPostText, addPost})(CreatePost)
