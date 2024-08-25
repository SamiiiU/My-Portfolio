import React from 'react';
import './index.css';
import Hero from './components/Hero';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className='relative bg-[rgb(0,0,19)] flex justify-center items-center flex-col overflow-hidden'>
      <div className='w-full md:px-16 px-8 max-w-7xl h-[100%] font-josefin'>
        
        <Home />
        <About />
        <Skills/>
        <Projects/>
      </div>
    </div>
    
  );
}

export default App;
