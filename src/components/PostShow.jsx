import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Icon from './img/photo.jpg'

export default function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then(request => request.json())
      .then(response => setPosts(response))
  })

  return (
    <div className="post-item-info">
      <img className="avatar" src={Icon} alt="icon"/>
      <span>Имя и Фамилия</span>
        <section>
          {posts && posts.map(item => <div key={item.id}><Link to={`/posts/${item.id}`}>{item.content}</Link></div>)}
        </section>
    </div>
  )
}