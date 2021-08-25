import React, { useState, useRef } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import './styles/App.css'

// 56:13   25/8


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description placeholder' },
    { id: 2, title: 'Java', body: 'Papa of JS/ or mother' },
    { id: 3, title: 'C++', body: 'Buller' },

  ])


  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  //  other road - hook useRef
  // const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')

    // console.log(newPost);


    // e.preventDefault()
    // console.log(title);
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
          value={body}
          onChange={e => setBody(e.target.value)}
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
