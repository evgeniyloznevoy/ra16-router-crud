import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

export default function Post() {
  let { id } = useParams();
  const [post, setPost] = useState()
  const navigate = useNavigate ()

  const onDelete = e => {
    e.preventDefault();
    fetch('http://localhost:7777/posts/' + id, {
      method: "DELETE"
    })
      .then(()=> navigate('/'));
  }

  useEffect(() => {
    fetch('http://localhost:7777/posts/' + id)
    .then(request => request.json())
    .then(response => setPost(response));
}, [])

  return (
    post && <div>{post.content} <button onClick={(e) => onDelete(e, post.id)}>delete</button></div>
  );
}