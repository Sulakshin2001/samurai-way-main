import React from "react";
import s from './Profile.module.css'
import {Myposts} from "./MyPosts/Myposts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.main}>
                <img
                    src='https://avatars.mds.yandex.net/i?id=10d5e358861b219ac08bc8dcc49583a5-5711615-images-thumbs&n=13'/>
            </div>

            <Myposts/>
        </div>


    )
}