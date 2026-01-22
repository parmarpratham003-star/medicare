import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Doctor from './pages/Doctor'
import Hero from './component/Hero'
import Footer from './component/Footer'
import Services from './component/Services'
import Home from './pages/Home'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Department from './pages/Department'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
       {/* <Route path='/' element={<Navbar />}/>
       <Route path='/' element={<Hero />}/>
       {/* <Route path='/' element={<Footer />}/> }
       <Route path='/Services' element={<Services />}/>
       <Route path='/' element={<Footer />}/> */}
       <Route path='/' element={<Home />}/>
       <Route path='/doctors' element={<Doctor />}/>
       <Route path='/services' element={<Service />}/>
       <Route path='/department' element={<Department />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/blog' element={<Blog />}/>

    </Routes>
  )
}

export default App
