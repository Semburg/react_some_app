import React, { useState } from 'react';

// 22-04   23/8


function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Input Text')

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)} />
      <h2>{likes}</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
