import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Other from "./components/Other";
import Footer from "./components/Footer";

class App extends Component {
  render () {
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<About/>} path='/about' />
        <Route element={<Other/>} path='/other' />
      </Routes>
      <Footer /> 
    </BrowserRouter>

   );

  }

}

export default App;