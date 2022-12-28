import React, { useEffect, useState } from 'react';
import Post from './Post';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:7777/posts';

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => setPosts(res.data))
    }, [])

    const postList = posts.map(post => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`} className='Post-link'>
                <Post post={post} />
            </Link>
        </li>
    ))

    return (
        <div className='PostsList-Container'>
            <div className='Button-New Btn'>
                <Link to='/posts/new'>New post</Link>
            </div>
            <ul className='PostsList'>
                {postList}
            </ul>
        </div>
    )
}