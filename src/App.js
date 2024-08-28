import React from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className=' relative bg-[rgb(0,0,19)] flex justify-center items-center flex-col overflow-hidden'>
      <div className='w-full md:px-16 px-8 max-w-7xl h-[100%] font-josefin'>
        <Nav />
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
