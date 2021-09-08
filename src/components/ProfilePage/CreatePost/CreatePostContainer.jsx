import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer"
import CreatePost from "./CreatePost"
import {connect} from "react-redux"

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer
