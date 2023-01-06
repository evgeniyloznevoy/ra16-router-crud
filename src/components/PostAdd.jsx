import {useState} from "react";
import { useNavigate  } from "react-router-dom";

export default function CreatePost() {

  const [text, setText] = useState('')
  const navigate = useNavigate ()

  const handleClick = (e) => {
    e.preventDefault();

    fetch('http://localhost:7777/posts', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: 0, content: text.trim()}),
    })
      .then(()=> navigate('/'))
  }

  return (
    <form className="form">
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
      <button type="btn-add-post" onClick={(e) => handleClick(e)}>Отправить</button>
    </form>
  )
  }