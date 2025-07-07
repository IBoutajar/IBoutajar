import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/Home'

function App() {

  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App
