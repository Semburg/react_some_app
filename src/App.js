import React, {useState} from 'react';




function App() {
  
  const [likes, setLikes] = useState(0)

  function increment() {
   setLikes(likes+1)
  }

  function decrement() {
    setLikes(likes-1)
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{likes}</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
