import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    
      <Header />
      <main style={{ minHeigtht:"93vh"}}>
        <Routes>
        <Route exact path='/' element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element= {<Portfolio/>} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
