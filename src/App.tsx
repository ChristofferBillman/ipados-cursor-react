import { useState } from 'react'
import './App.css'
import Cursor from './components/Cursor'
import RoundButton from './components/RoundButton'

function App() {

  const [isHover, setIsHover] = useState()
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <Cursor/>
      <RoundButton isHover={isHover} setIsHover={setIsHover}/>
    </div>
  )
}

export default App
