import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cal } from './Components/Cal'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cal/>
    </>
  )
}

export default App
