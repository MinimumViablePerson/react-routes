import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PhotoDetails from './pages/PhotoDetails'
import Photos from './pages/Photos'

function App () {
  const [name, setName] = useState('Nicolas')

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/home' element={<Home name={name} />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/photos/:id' element={<PhotoDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
