import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {
    ActionsTypes,
    PostsType,
} from "../../../redux/state";
import store from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MyPostsProps = {
    posts: Array<PostsType>
    messageForNewPost: string
    //addPostCallback: (postMessage: string )=> void
    //updateNewPostTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsProps> = (props) => {

    let postsElement = props.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                                   likesCount={el.likesCount} avatar={el.avatar}/>)


    const addPostHandler = () => {
        //props.addPostCallback(props.messageForNewPost)
        //props.dispatch({type: "ADD-POST", postMessage: props.messageForNewPost})
        props.dispatch(addPostAC(props.messageForNewPost))
        store._state.profilePage.messageForNewPost = ''
    }

    const onChangePostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('onChangePostHandler')
        // props.updateNewPostTextCallback(event.currentTarget.value)

        //let text = event.currentTarget.value
        //let action:updateNewPostTextAT = {type: "UPDATE-NEW-POST-TEXT", newText: text}
        //props.dispatch(action)

        props.dispatch(updateNewPostTextAC(event.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea //ref={newPostElement}
                        onChange={onChangePostHandler}
                        value={props.messageForNewPost}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;