import React, { useState } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import PostItem from './components/PostItem';
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
      <h1 style={{textAlign:'center'}}>Post's List</h1>
    {posts.map(post=>
      
        <PostItem post={post} key={post.id} />
      
    )}


    </div>
  );
}

export default App;
