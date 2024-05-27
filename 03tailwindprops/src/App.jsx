import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username: "Addan",
    age: 21
  }

  let arr = [
    1, 2, 3, 4, 5
  ]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username="Add On" btnText="Click me" />
      <Card username="Anonymous" />

    </>
  )
}

export default App
