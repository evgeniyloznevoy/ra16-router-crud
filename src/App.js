import React, {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {AllPosts} from "./components/AllPosts";
import PostsList from './components/PostsList';
import PostAdd from './components/PostAdd';
import PostShow from './components/PostShow';
import PostEdit from './components/PostEdit';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AllPosts(setPosts)
  }, []);

  const addPost = async (content) => {
    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 0,
        content: content
      })
    })
        .then(myJson => console.log('Add new Post: ', myJson));

        AllPosts(setPosts);
  }

  return (
    <div className="App">
      <Router>
        <button className='btn-add-post'>
          <Link to="/posts/new">Создать пост</Link>
        </button>
        <Routes>
          <Route path='/posts/new' render={props => <PostAdd {...props} addPost={addPost}/>}/>
          <Route path="/" exact render={() => posts.map(e =>
              <PostsList key={e.id} id={e.id} content={e.content}/>)}/>
          <Route path='/post/:id' exact element={<PostShow />} />
          <Route path='/post/:id/edit' exact element={<PostEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;