import { useParams, useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

export default function Post({textArea}) {
    let { id } = useParams()
    const [post, setPost] = useState([])
    const navigate = useNavigate ()

    const onDelete = e => {
      e.preventDefault();
      fetch('http://localhost:7777/posts/' + id, {
        method: "DELETE"
      })
        .then(()=> navigate('/'));
    }

    const onEdit = e => {
      e.preventDefault();
      fetch('http://localhost:7777/posts/',
          {
              method: 'POST',
              mode: 'no-cors',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({id: Number(id), content: textArea.current.value})
          })
          .then(()=> navigate('/'));
  }
 
    useEffect(()=>{
        fetch('http://localhost:7777/posts/')
            .then(response => response.json())
            // .then(json=>setPost(json))
            .then(json => setPost(json.filter(post => post.id === id)))
  }, [post, id])


  //   useEffect(()=>{
  //       fetch('http://localhost:7777/posts/')
  //           .then(response=> response.json())
  //           .then(json=>setPost(json.filter(post => post.id === match.paramps.id)))
  // }, [])

    return (
      post && <div>{post.content} 
      <button type="btn-add-post" onClick={(e) => onDelete(e, post.id)}>Удалить пост</button>
      <button type="btn-add-post" onClick={(e) => onEdit(e, post.id)}>Редактировать пост</button>
      <button type="btn-add-post" onClick={(e) => navigate('/')}>Вернуться</button>
      </div>
    
      )
}