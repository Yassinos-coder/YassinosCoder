import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Components/HomePage/Homepage'
import Aboutme from './Components/HomePage/Aboutme'
import Projects from './Components/HomePage/Projects'
import Certifications from './Components/HomePage/Certifications'
import Experiences from './Components/HomePage/Experiences'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />}> 
          <Route index element={<Aboutme />}/>
          <Route path='Projects' element={<Projects />}/>
          <Route path='Certifications' element={<Certifications />}/>
          <Route path='Experiences' element={<Experiences />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
