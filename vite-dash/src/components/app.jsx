import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="mb-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="ml-2 font-bold text-black">
                      Uplaod Photo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="mb-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="ml-2 font-bold text-black">
                      Uplaod Video
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
