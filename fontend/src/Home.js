import React from 'react'
import "./App.css"
const Home = () => {
  return (
    <div className="App">
      <button
        onClick={() =>
          (window.location = 'http://localhost:1337/api/connect/google')
        }
      >
        Login via Google
      </button>
    </div>
  )
}

export default Home