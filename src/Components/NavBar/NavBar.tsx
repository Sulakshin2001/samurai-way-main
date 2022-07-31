import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/profile" activeClassName={s.active}><h3>Profile</h3></NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={s.active}><h3>Messages</h3></NavLink></div>
            <div><NavLink to="/news" activeClassName={s.active}><h3>News</h3></NavLink></div>
            <div><NavLink to="/music" activeClassName={s.active}><h3>Music</h3></NavLink></div>


        </nav>
    )
}