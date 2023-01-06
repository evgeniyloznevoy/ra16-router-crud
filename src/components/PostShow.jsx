import { Link } from "react-router-dom";
import Icon from './img/photo.jpg'

function PostShow({ id, text, editPost }) {

  const remove = e => {
    const xhr = new XMLHttpRequest();
    const url = `http://localhost:7070/posts/${id}`;
    xhr.open('DELETE', url);
    xhr.send();
  }

  return (
    <div className="post-item-info" data-id={id}>
      <div className="box-content">
        <img className="avatar" src={Icon} alt="icon"/>
        <span>Имя и Фамилия</span>
      </div>
      <p className="text-post">{text}</p>
      <div className="box-buttons">
        <button className="post-btn-edit" type="button" onClick={editPost}>Изменить</button>
        <button className="post-btn-delete" type="button" onClick={remove}><Link to="/">Удалить</Link></button>
      </div>
    </div>
  )
}

export default PostShow;