import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css'

// 22-04   23/8


function App() {

  const [value, setValue] = useState('Input Text')



  return (
    <div className="App">
      
      <div className="post">
          <div className="post__content">
            <strong>1. Javascript</strong>
            <div>
              Javascript - programming language
            </div>
          </div>
          <div className="post__btns">
            <button>Delete</button>
          </div>
      </div>

    </div>
  );
}

export default App;
