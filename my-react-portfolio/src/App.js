import React from 'react';
import About from './components/About';
import Navbar from './components/navbar';
import Project from './components/Project';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
