import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import "./App.css"
import DisplayShow from './pages/DisplayShow';
function App() {
  return (
    <div>
      <Router>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie-info/:id' element={<DisplayShow/>}/>
          </Routes> 
      </Router>
      
    </div>
  )
}

export default App
