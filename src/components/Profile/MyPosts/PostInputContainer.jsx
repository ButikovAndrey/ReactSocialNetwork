import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../redux/profileReducer";
import PostInput from "./PostInput";

const mapStateToProps=(state)=>{
    return{
        newPost: state.profileData.newPost
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost(){
            dispatch(addPostActionCreator());
        },    
        changeInput(title, text){
            dispatch(onPostChangeActionCreator(title, text));
        }
    }
}

const PostInputContainer = connect(mapStateToProps, mapDispatchToProps)(PostInput);

export default PostInputContainer;