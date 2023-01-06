import React, {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Post from './components/Post';
import PostAdd from './components/PostAdd';
import PostShow from './components/PostShow';
import PostEdit from './components/PostEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <button className='btn-add-post'>
          <Link to="/posts/new">Создать пост</Link>
        </button>
        <Routes>
          <Route path='/posts/new' element={<PostAdd />} />
          <Route path="/" exact element={<Post />} />
          <Route path='/post/:id' exact element={<PostShow />} />
          <Route path='/post/:id/edit' exact element={<PostEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;