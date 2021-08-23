import React from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css'

// 22-04   23/8


function App() {

  // const [value, setValue] = useState('Input Text')



  return (
    <div className="App">

      <PostItem
        post={{ id: 1, title: 'Javascript', body: 'Description placeholder' }} />

      <PostItem
        post={{ id: 2, title: 'Java', body: 'Parent of JS' }} />

      <PostItem
        post={{ id: 3, title: 'Pythom', body: 'Wrong letter inside' }} />

      <PostItem
        post={{ id: 4, title: 'C++', body: 'The buller' }} />



    </div>
  );
}

export default App;
