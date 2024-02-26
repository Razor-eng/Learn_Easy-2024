import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Languages from './Pages/Languages'
import Contact from './Pages/Contact'
import Data from './Pages/Data'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-x-hidden'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/languages' element={<Languages />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:name' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App