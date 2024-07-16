import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addVal=()=>{
    setCount(count+1)
    console.log(count)
  }

  const reduceVal=()=>{
    setCount(count-1)
    console.log(count)
  }

  const reset=()=>{
    setCount(0)
    console.log(count)
  }


  return (  
      <>
        <h1>Counter App</h1>
        <h3>Count : {count}</h3>
        <button  onClick={addVal} >Increment</button>{"  "}
        <button onClick={reduceVal}>Decrement</button><br/><br/>

        <button onClick={reset}>Reset</button>
        <h4>Thank You</h4>
      </>
    )
}

export default App
