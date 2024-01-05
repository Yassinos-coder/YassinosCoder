import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Components/HomePage/Homepage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Homepage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
