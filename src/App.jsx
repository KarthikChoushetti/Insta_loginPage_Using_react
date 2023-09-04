import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    setCount((count)=>count+1)
  }
  const decrease=()=>{
    setCount((count)=>count-1)
  }
  return (
    <>
     <div className='container'>
      <h1>{count}</h1>
    <div className='btn'>
      <button onClick={increase} className='incr'>Increase</button>
      <button onClick={decrease} className='decr'>Decrease</button>
    </div>
     </div>
    </>
  )
}

export default App
