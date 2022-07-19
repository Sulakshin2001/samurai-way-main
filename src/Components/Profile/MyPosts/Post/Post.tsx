import s from "../../Profile.module.css";
import React, {useState} from "react";
import {v1} from "uuid";





type Arraytype={
    message:string,
    id:string

}
type PostProps={
    MessageArray:Array<Arraytype>
    DeletePost:(id:string)=>void
}
export const Post = (props:PostProps) => {
    return (
        <div>
            {props.MessageArray.map(el=>{
                return(
                    <div className={s.avatar}>
                        <img src='https://media.moddb.com/images/groups/1/35/34161/1551511862_48.jpg'/>
                        {el.message}
                        <button onClick={()=>props.DeletePost(el.id)}>DeletePost</button>
                        <button>Like</button>


                    </div>
                )
            })}
        </div>
    )
}