import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Countdown } from './components/Countdown'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Countdown/>
    </>
  )
}

export default App
