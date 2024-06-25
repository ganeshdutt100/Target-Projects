import { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement} from './reduxFolder/counter/counterSlice'
function App() {
  const count  = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={()=>dispatch(increment())} >Add</button>
    <span>0</span>
    <button onClick={()=>dispatch(decrement())}  >Sub</button>
      </>
  )
}

export default App
