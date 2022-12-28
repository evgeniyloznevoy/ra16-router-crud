import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:7777/posts';

export default function PostAdd({ history }) {
    const [postContent, setPostContent] = useState('');
    const handlePostChange = ({ target }) => setPostContent(target.value);

    const addNewPost = () => {
        if (!postContent) {
            return;
        } else {
            axios.post(url, { id: 0, content: postContent })
                .then(() => {
                    setPostContent('');
                    history.push('/');
                })
        }
    }

    return (
        <div className='PostAdd-Container'>
            <div className='PostAdd-Title'>New post</div>
            <Link to='/'>
                <div className='PostAdd-CloseBtn'>&#10006;</div>
            </Link>
            <textarea className='PostAdd-Textarea' rows="10" onChange={handlePostChange} value={postContent}></textarea>
            <div className='PostAdd-Submit Btn' onClick={addNewPost}>Publish</div>
        </div>
    )
}