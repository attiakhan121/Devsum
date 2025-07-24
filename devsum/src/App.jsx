import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="bg-[#132c44] text-white rounded-xl p-6">
  This is a styled card using Tailwind classes!
</div>

<button className="bg-[#ff6b00] text-white py-2 px-4 rounded-lg hover:bg-orange-600">
  Apply Now
</button>


    </>
  )
}

export default App
