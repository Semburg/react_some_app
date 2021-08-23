import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

// 22-04   23/8


function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Input Text')



  return (
    <div className="App">
      <h3>Examples</h3>
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
