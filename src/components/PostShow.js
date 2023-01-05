import React, {useState, useEffect} from "react";

export default function PostShow (props) {
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:7777/posts?id=${props.match.params.id}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                setPosts(res);
            });
    }, [])


    const deletePost = async (id) => {
        await fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE'
        })
        console.log(`post №${id} deleted`)
        props.history.push('/');
    }

    return (
        <div className='post-item-info'>
            {posts &&
            <>
                <header>
                    <div className='avatar'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt='avatar'/>
                    </div>
                    <h3 className='user-name'>Username</h3>
                </header>
                <div className='post-content'>{posts[0].content}</div>
                <div className='btn-container'>
                    <button className='post-btn-edit' onClick={() => props.history.push(`/post/${posts[0].id}/edit`)}>Изменить</button>
                    <button className='post-btn-delete' onClick={() => deletePost(posts[0].id)}>Удалить</button>
                </div>
            </>
            }

        </div>
    )

}