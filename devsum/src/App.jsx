import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold text-white">Hello Tailwind CSS 👋</h1>
      <p className="text-lg text-yellow-200 mt-4">
        If you see this styled, Tailwind is working!
      </p>
    </div>

    </>
  )
}

export default App
