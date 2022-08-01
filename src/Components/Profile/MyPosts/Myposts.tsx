import s from './Myposts.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {Button} from "@mui/material";
import {AddTaskAC} from "../../../redux/state";

type PostsArr = Array<obj>
type obj = {
    message: string,
    id: string
}
type myPostsType = {
    dispatch: (action: any) => void
    PostName: Array<obj2>
}
type obj2 = {
    id: string,
    post: string

}
export const Myposts = (props: myPostsType) => {
    const [message, setmessage] = useState('')
    const Messageset = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setmessage(e.currentTarget.value)

    }
    const addPost = (message: string) => {
        return props.dispatch(AddTaskAC(message))
        setmessage('')
    }

    return (
        <div>

            <div>Myposts</div>
            <textarea value={message} onChange={Messageset} className={s.area}/>
            {/* <button onClick={AddPost} disabled={message==='' ? true : false}>addpost</button>*/}
            <Button variant="contained" onClick={() => addPost(message)} disabled={message === '' ? true : false}>
                Send
            </Button>
            <div>New Post</div>
            <Post MessageArray={props.PostName}/>
        </div>
    )
}