import s from './Myposts.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {Button} from "@mui/material";
type PostsArr=Array<obj>
type obj={
    message:string,
    id:string
}
export const Myposts = () => {
  const [message,setmessage]=useState('')
    const [MessageArray,SetMessageArray]=useState<PostsArr>([])
  const Messageset=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    setmessage(e.currentTarget.value)

  }
  const AddPost=()=>{
      let obj={message:message,id:v1()}
      SetMessageArray([obj,...MessageArray])
      setmessage('')

  }
  const DeletePost=(id:string)=>{
      SetMessageArray([...MessageArray.filter(el=>el.id!=id)])
  }

    return (
        <div>

            <div>Myposts</div>
            <textarea value={message} onChange={Messageset} className={s.area}/>
           {/* <button onClick={AddPost} disabled={message==='' ? true : false}>addpost</button>*/}
            <Button variant="contained" onClick={AddPost} disabled={message==='' ? true : false}>
                Send
            </Button>
            <div>New Post</div>
            <Post MessageArray={MessageArray} DeletePost={DeletePost}/>
        </div>
    )
}