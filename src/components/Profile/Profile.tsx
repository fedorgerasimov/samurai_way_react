import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {

}

function Profile(props: any) {
    return (
        <div>
            <div>
                <img src="https://anjalisk96.files.wordpress.com/2017/09/top-social-networking-sites.jpg?w=693&zoom=2" alt="social-network"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;