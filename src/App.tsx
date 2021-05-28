import React, { useState } from 'react'
import logo from './logo.svg'
import * as Style from './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={Style.App}>
      <header className={Style.AppHeader}>
        <img src={logo} className={Style.AppLogo} alt="logo" />
        <p>Hello Vite + React + vanilla-extract!</p>
        <p>
          <button className={Style.Button} onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={Style.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={Style.AppLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
