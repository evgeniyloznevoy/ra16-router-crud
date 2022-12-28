import React from 'react'

export default function Post({ post }) {

    return (
        <div className='Post-container'>
            <div className='Post-avatar'>
                <img src="https://img.icons8.com/color/48/000000/avatar.png" alt="post-avatar" />
            </div>
            <div className='Post-username'>Lazy Ferret</div>
            <div className='Post-content'>{post.content}</div>
            <div className='Post-date'>
                Created:
                <span>{(new Date(post.created)).toLocaleString()}</span>
            </div>
        </div>
    )
}