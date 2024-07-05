import { useState } from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import WorkoutPage from './pages/WorkoutPage/WorkoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WorkoutPage/>
    </>
  )
}

export default App
