import React from 'react';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeigtht:"93vh"}}>
        <About></About>
      </main>
     
      <Footer />
    </>
  );
}

export default App;
