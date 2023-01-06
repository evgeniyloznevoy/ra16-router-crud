import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Post from './components/Post';
import PostAdd from './components/PostAdd';
import PostShow from './components/PostShow';

function App() {
  return (
    <div className="App">
      <Router>
        <button className='btn-add-post'>
          <Link to="/posts/new">Создать пост</Link>
        </button>
        <Routes>
          <Route path='/posts/new' element={<PostAdd />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path="/" element={<PostShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;