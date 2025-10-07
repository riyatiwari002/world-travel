import React from 'react'
import { BrowserRouter,Routes,Route }  from 'react-router-dom'
import Header from './Components1/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import Footer from './Components1/Footer/Footer.jsx'
import Blog from './Pages/Blog/Blog.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'


const App = () => {
  return (
    
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
  )
}

export default App
