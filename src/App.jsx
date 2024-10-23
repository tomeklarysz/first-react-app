import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  // const [count, setCount] = useState(0)
  const animals = ["Lion", "Dog"]
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
      {/* <List /> */}
    </div>
  )
}
/*
Why do multiple JSX tags need to be wrapped?
JSX looks like HTML, but under the hood it is transformed 
into plain JavaScript objects. You can’t return two objects
 from a function without wrapping them into an array. This explains 
 why you also can’t return two JSX tags without wrapping them into 
 another tag or a Fragment.
*/
export default App
