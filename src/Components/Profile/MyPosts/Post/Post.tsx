import s from "../../Profile.module.css";
import React, {useState} from "react";
import {Button} from "@mui/material";






type Arraytype={
    post:string,
    id:string

}
type PostProps={
    MessageArray:Array<Arraytype>
}
export const Post = (props:PostProps) => {
    return (
        <div className={s.post}>
            {props.MessageArray.map(el=>{
                return(
                    <div className={s.avatar}>
                        <img src='https://media.moddb.com/images/groups/1/35/34161/1551511862_48.jpg'/>
                       {el.post}
                        <Button variant="contained"  className={s.delete} size='small'>
                            Delete
                        </Button>



                    </div>
                )
            })}
        </div>
    )
}