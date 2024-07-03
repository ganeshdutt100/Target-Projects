import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import File2 from './Components/File2'
import File3 from './Components/File3'
// import

function App() {
  const [count, setCount] = useState(0)

  // Math.floor(Math.random() * jokes.length)

  return (
    <>
      {/* <File2 /> */}
      <File3 />
    </>
  )
}

export default App
