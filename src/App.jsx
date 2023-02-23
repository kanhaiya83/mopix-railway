import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Home from './components/Home'
import Step from './components/Step'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import './styles/tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white'>
    <Header/>
    <Home/>
    <Step/>
    <Step2/>
    <Step3/>
    </div>
    </>
  )
}

export default App
