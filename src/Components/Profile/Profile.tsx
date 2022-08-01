import React from "react";
import s from './Profile.module.css'
import {Myposts} from "./MyPosts/Myposts";
type profileType={
    dispatch:(action:any)=>void
    PostName:Array<obj2>
}
type obj2={
    id:string,
    post:string
}
export const Profile = (props:profileType) => {
    return (
        <div className={s.content}>
            <div className={s.main}>
                <img
                    src='https://getsmartdigital.com/wp-content/uploads/2015/09/social-background.jpg'/>
            </div>
            <div className={s.posts}>

            <Myposts dispatch={props.dispatch} PostName={props.PostName}/>
            </div>
        </div>


    )
}