import React from "react";
import s from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={`${s.item} ${s.active}`}>   {/*так можно применить отдельные стили*/}
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;