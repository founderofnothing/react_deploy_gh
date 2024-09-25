import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from './component/Navabar';
import Hero from './component/Hero';
import About from './component/About';
import What from './component/What';



const App = () => {
  return (
    <div>
      <HashRouter>
      <Routes>

       <Route path="/" element={
                <main>
                <Navbar/>
                <Hero/>
                <About/>
                <What/>
                </main>
                } />


</Routes>
      </HashRouter>
     
    </div>
  );
};

export default App; 
