import React from "react";
import s from './Profile.module.css'
import {Myposts} from "./MyPosts/Myposts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.main}>
                <img
                    src='https://getsmartdigital.com/wp-content/uploads/2015/09/social-background.jpg'/>
            </div>
            <div className={s.posts}>

            <Myposts/>
            </div>
        </div>


    )
}