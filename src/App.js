import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <>
    
      <Header />
      <main style={{ minHeigtht:"93vh"}}>
        <Routes>
        <Route exact path='/' element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element= {<Portfolio/>} />
        <Route path="/resume" element= {<Resume/>}/>
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
