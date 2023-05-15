import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Blogs from "./pages/Blogs";
const App = () => {
 
  return (

    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/team' element={< Team />}></Route>
    <Route exact path='/blogs' element={< Blogs />}></Route>

  </Routes>

  )
}

export default App