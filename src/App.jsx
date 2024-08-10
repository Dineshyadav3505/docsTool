import React from 'react';
import Navbar from './components/elements/Navbar.jsx';
import Footer from './components/elements/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/web/Home.jsx';
import Register from './components/web/Register.jsx';
import Login from './components/web/Login.jsx';
import Actionpage from './components/web/Actionpage.jsx';

const App = () => {
  return (
    <div className='min-h-screen bg-[#aeadad] text-black dark:bg-[#212121] dark:text-white '>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/:title" element={<Actionpage/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/login" element={<Login/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;