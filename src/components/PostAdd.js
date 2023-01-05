import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function PostAdd (props) {
    const [value, setValue] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        props.addPost(value);
        props.history.push('/');
    }
    return (
        <form onSubmit={onSubmitForm} className='postAddForm'>
            <button className='close-form'><NavLink to='/'>&#10006;</NavLink></button>
            <textarea
                placeholder='О чем Вы сейчас думаете?'
                onChange={(e) => {setValue(e.target.value);}}
            />
            <button type='submit' className='postAddForm-btn'>Опубликовать</button>
        </form>
    )

}