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
            <h6 className='="italic text-blue-600 text-lg font-semibold border-b-2 border-blue-600"'>Currency Options</h6>
              <p className='text-base font-medium m-0'>Value to convert </p>
                <input type="text" className='w-150'/>
                  <div className='flex flex-col w-full gap-4'>
                      <div className='flex'>
                        <label htmlFor="rupees1">from                          
                         
                          <select className='text-black' name="" id="rupees1" style={{width: "100%"}}>
                            <option value="">select curreny</option>
                              <option value="pkr">pakistan</option>
                              <option value="usa">USA</option>
                          </select>
                        </label>                    
                      </div>



                      <div className='flex'>
                        <label htmlFor="rupees1">To                          
                          <select className='text-black' name="" id="rupees2" style={{width: "100%"}}>
                            <option value="">select curreny</option>
                              <option value="pkr">pakistan</option>
                              <option value="usa">USA</option>
                          </select>
                        </label>                    
                      </div>

                  </div>
                  <div className='flex justify-between w-full'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Calculate</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Clear</button>
                  </div>





          </div>
      </div>
    </div>
  )
}

export default App
