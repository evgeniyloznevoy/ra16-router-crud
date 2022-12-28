import './App.css';
import PostsList from './components/PostsList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostAdd from './components/PostAdd';
import PostShow from './components/PostShow';
import PostEdit from './components/PostEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={PostsList} />
        <Route path='/posts/new' component={PostAdd} />
        <Route path='/posts/:id' component={PostShow} />
        <Route path='/edit/:id' component={PostEdit} />
      </Router>
    </div>
  );
}

export default App;