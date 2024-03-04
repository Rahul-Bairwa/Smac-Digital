import { SiWhatsapp } from 'react-icons/si'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='top-section'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about us' element={<About />} />
      </Routes>
      <div className="whatsapp-sticky-div">
        <a href="https://wa.me/message/FIXBPM3JZUSQJ1" className="whatsapp-sticky-button"><SiWhatsapp /></a>
      </div>
    </div>
  )
}

export default App
