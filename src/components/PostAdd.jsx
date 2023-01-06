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