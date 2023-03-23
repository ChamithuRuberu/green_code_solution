import React from 'react'
import {Route,Routes } from 'react-router-dom'

import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/projects/Projects'
import Services from './pages/services/Services'
import NavBar from './component/navbar/NavBar'
import Footer from "./component/footer/Footer";
import AboutUs from "./pages/aboutus/AboutUs";
import Technology from "./pages/technology/Technology";

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/'Component={Home}/>
      <Route path='/AboutUs'Component={AboutUs}/>
      <Route path='/Services'Component={Services}/>
      <Route path='/Projects'Component={Projects}/>
      <Route path='/Contact'Component={Contact}/>
      <Route path='/Technology'Component={Technology}/>
    </Routes>
      <Footer/>
  </>
  )
}
export default App;
