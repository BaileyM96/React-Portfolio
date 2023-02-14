import React from 'react';
import About from './components/About';
import Navbar from './components/navbar';
import Project from './components/Project';
import Contact from './components/Contact'
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
