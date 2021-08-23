import React, { useState } from 'react';
import PostList from './components/PostList';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

// 22-04   23/8


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description placeholder' },
    { id: 2, title: 'Java', body: 'Papa of JS/ or mother' },
    { id: 3, title: 'C++', body: 'Buller' },

  ])


  return (
    <div className="App">

      <form>
        <input type="text" placeholder='Topic' />
        <input type="text" placeholder='Description' />
        <button>Create</button>
      </form>

      <PostList posts={posts} title = "Post's List"/>

    </div>
  );
}

export default App;
