import React from "react";
import {NavLink} from "react-router-dom";

export default function PostsList({id, content, created}) {
    return (
        <div className='post-item'>
            <NavLink to={`/post/${id}`}>
                <header>
                    <div className='avatar'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                    </div>
                    <h3 className='user-name'>Username</h3>
                </header>
                <div className='post-content'>{content}</div>
                <div className='comment-form'>
                    <div className='comment-avatar'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                    </div>
                    <input placeholder='Напиши комментарий'/>
                </div>
            </NavLink>
        </div>
    )


}