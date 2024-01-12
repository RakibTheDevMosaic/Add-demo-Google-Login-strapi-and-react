import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import GoogleAuthCallback from './GoogleAuthCallback.js'
import Home from './Home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App