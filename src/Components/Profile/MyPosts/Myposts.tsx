import s from './Myposts.module.css'
import React, {ChangeEvent, useEffect, useState} from "react";
import {Post} from "./Post/Post";
import {v1} from "uuid";

export const Myposts = () => {
  const [message,setmessage]=useState('')
    const [MessageArray,SetMessageArray]=useState([{message:'hello',id:'1'}])
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
            <textarea value={message} onChange={Messageset}/>
            <button onClick={AddPost} disabled={message==='' ? true : false}>addpost</button>
            <div>New Post</div>
            <Post MessageArray={MessageArray} DeletePost={DeletePost}/>
        </div>
    )
}