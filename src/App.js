import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

// 42:39   24/8


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description placeholder' },
    { id: 2, title: 'Java', body: 'Papa of JS/ or mother' },
    { id: 3, title: 'C++', body: 'Buller' },

  ])


  const [title, setTitle] = useState('')

  //  other road - hook useRef
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title);
    console.log( bodyInputRef.current.value );
  }



  return (
    <div className="App">

      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='Topic'
        />


        <MyInput
          ref = {bodyInputRef}
          type="text"
          placeholder='Description'
        />
        <MyButton onClick={addNewPost} >Create</MyButton>
      </form>

      <PostList posts={posts} title="Post's List" />

    </div>
  );
}

export default App;
