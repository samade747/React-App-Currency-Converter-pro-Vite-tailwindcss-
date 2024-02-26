import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center p-10 w-full h-screen'>
 
      <div className='bg-gray-200 border-2 border-gray-400 rounded-lg p-2'>
        <h1 className='bg-red-600 text-white font-bold w-full text-center py-4 px-2 rounded-lg text-lg'>Curreny Converter</h1>
          <div className='bg-red-600 text-white font-bold text-center w-full py-4 px-2 rounded-lg text-lg'>
            <h6 className='="italic text-blue-600 text-lg font-semibold border-b-2 border-blue-600"'>Curreny Options</h6>



          </div>
      </div>
    </div>
  )
}

export default App
