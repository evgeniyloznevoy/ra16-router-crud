import { Link } from "react-router-dom";
import Icon from './img/photo.jpg'

function Post({ id, text }) {
  return (
    <Link className="link_post" to={`/posts/${id}`} >
      <div className="box-post" data-id={id}>
        <div className="box-content">
          <img className="icon" src={Icon} alt="icon"/>
          <span>Имя и Фамилия</span>
        </div>
        <p className="text-post">{text}</p>
      </div>
    </Link>
  )
}

export default Post;