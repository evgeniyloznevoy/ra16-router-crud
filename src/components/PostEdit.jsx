import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const url = 'http://localhost:7777/posts';

export default function PostEdit({ match, history }) {
    const id = Number(match.params.id);
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => setPostContent(res.data.find(p => Number(p.id) === id).content))
    }, [id]);

    const handlePostChange = ({ target }) => setPostContent(target.value);

    const addEditedPost = () => {
        if (!postContent) {
            return;
        } else {
            axios.post(url, { id, postContent })
                .then(() => {
                    setPostContent('');
                    history.push(`/posts/${id}`);
                });
        }
    }

    return (
        <div className='PostAdd-Container'>
            <div className='PostAdd-Title'>Edit post</div>
            <Link to={`/`}>
                <div className='PostAdd-CloseBtn'>&#10006;</div>
            </Link>
            <textarea className='PostAdd-Textarea' cols="30" rows="10" onChange={handlePostChange} value={postContent}></textarea>
            <div className='PostAdd-Submit Btn' onClick={addEditedPost}>Publish</div>
        </div>
    )
}