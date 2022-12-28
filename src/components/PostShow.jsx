import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const url = 'http://localhost:7777/posts';

export default function PostShow({ match, history }) {
    const id = match.params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => setPost(res.data.find(p => Number(p.id) === Number(id))))

    }, [id]);

    const onDelete = () => {
        axios.delete(`${url}/${id}`)
            .then(() => history.push('/'))
    };

    const markup = <>
        <Post post={post} />
        <div className='Button-Container'>
            <div className='Button-Home Btn'>
                <Link to='/'>Home</Link>
            </div>
            <div className='Button-Edit Btn'>
                <Link to={`/edit/${id}`}>Edit</Link>
            </div>
            <div className='Button-Delete Btn' onClick={onDelete}>Delete</div>
        </div>
    </>

    return (
        <>
            {post && markup}
        </>
    )
}