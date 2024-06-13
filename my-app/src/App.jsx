import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  let sele=useSelector(state=>state)
  let disp=useDispatch()

  return (
    <>
    <h1>{sele}</h1>
    <button onClick={()=>disp({type:"inc"})}>increment</button>
    <button onClick={()=>disp({type:"dec"})}>increment</button>
    </>
  )
}

export default App
