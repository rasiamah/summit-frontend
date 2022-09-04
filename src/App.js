import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// eslint-disable-next-line 
import NavBar from "./components/NavBar"; 
import Programs from "./components/Programs";
// eslint-disable-next-line 
import Footer from "./components/Footer";
import Whatwedo from './components/Whatwedo';
import Partners from './components/Partners';
import Contact from './components/Contact';

class App extends Component {
  render () {
  return (
    // eslint-disable-next-line 
    <BrowserRouter>
     <NavBar /> 
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<Whatwedo/>} path='/whatwedo'/>
        <Route element={<About/>} path='/about' />
        <Route element={<Programs/>} path='/programs' />
        <Route element={<Partners/>} path='/partners'/>
        <Route element={<Contact/>} path='contact'/>
      </Routes>
      {/* <Footer />  */}
    </BrowserRouter>

   );

  }

}

export default App;