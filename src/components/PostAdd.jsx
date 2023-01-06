// import React, {useState} from "react";
// import {NavLink} from "react-router-dom";

// export default function PostAdd (props) {
//     const [value, setValue] = useState('');

//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         props.addPost(value);
//         props.history.push('/');
//     }
//     return (
//         <form onSubmit={onSubmitForm} className='postAddForm'>
//             <button className='close-form'><NavLink to='/'>&#10006;</NavLink></button>
//             <textarea
//                 placeholder='О чем Вы сейчас думаете?'
//                 onChange={(e) => {setValue(e.target.value);}}
//             />
//             <button type='submit' className='postAddForm-btn'>Опубликовать</button>
//         </form>
//     )

// }


import { Link } from "react-router-dom";

function PostAdd() {

  const onSubmitForm = e => {
    e.preventDefault();
    const elemForm = document.querySelector('.form-post_create');
    const formData = new FormData(elemForm);
    formData.append('id', 0);
    formData.append('content', document.querySelector('textarea').value);
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7070/posts';
    xhr.open('POST', url);
    xhr.send(formData);
  }

  return (
    <>
      <form className="postAddForm">
        <label className="label">
          <textarea className="textarea" placeholder='О чем Вы сейчас думаете?' />
        </label>
        <button className="postAddForm-btn" type="submit" onClick={onSubmitForm}><Link to="/">Опубликовать</Link></button>
        <button className="close-form" type="button"><Link to="/">X</Link></button>
      </form>
    </>
  )
}

export default PostAdd;