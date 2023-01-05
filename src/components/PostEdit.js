import React, {useState, useEffect} from "react";

export default function PostEdit (props) {
    const [posts, setPosts] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch(`http://localhost:7777/posts?id=${props.match.params.id}`)
            .then((response) => response.json())
            .then((res) => {
                setPosts(res);
            });
    }, [])

    if(posts) {
        if(value === '') {
            setValue(posts[0].content);
        }
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:7777/posts/${posts[0].id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: posts[0].id,
                content: value,
            })
        })

        props.history.push(`/post/${posts[0].id}`);
    }


    return (
        <div className='post-item-edit'>
            {posts &&
            <>
                <header className='post-item-edit_top'>
                    <h3>Редактировать публикацию</h3>
                    <button type='button' onClick={() => props.history.push(`/post/${posts[0].id}`)}>&#10006;</button>
                </header>
                <form onSubmit={onSubmitForm} className='form-edit'>
                    <textarea className='form-edit-textarea' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type='submit'>Сохранить</button>
                </form>
            </>
            }

        </div>

    )


}