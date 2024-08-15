import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route exact path="/" element={<Landing/>} />
      {/* <Route exact path= "/profile/:id" element={} /> */}
     </Routes>
    </>
  )
}

export default App
