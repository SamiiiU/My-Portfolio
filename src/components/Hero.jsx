import React from 'react'
import { Spotlight } from './UI/Spotlight'
import Bggrid from '../Images/Bg-grid.png'
import { TextGenerateEffect } from './UI/TextEffect'
import Button from './UI/Button'
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=''>
      <div>
        <Spotlight className="h-screen -top-10 left-20 md:left-32 md:-top-20" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] opacity-100 w-[50vw]" fill="pink"/>
        <Spotlight className="top-10 left-full h-[80vh] opacity-100 w-[50vw]" fill="pink"/>
        <Spotlight className="h-screen opacity-50 top-10 -left-10 md:left-32 md:top-20" fill="white"/>
        <Spotlight className="h-screen top-10 left-20 md:left-32 md:top-20" fill="white"/>
      </div>

      <div className="relative flex items-center justify-center w-full h-screen">
  
          <div className='flex items-center justify-center text-center '>
            <div className=' max-w-[89vw]'>
              <h2 className='text-teal-50 text-lg md:text-xl tracking-[0.5em]'>DYNAMIC PORTFOLIO WEBSITE</h2>
              <TextGenerateEffect 
              className='text-5xl' 
              words="Welcome to the world of coder" 
              />
              <p className='mt-4 text-lg font-semibold text-teal-50'>
                Hi , I am sami , A Reactjs developer
              </p>

              <a className='mt-4'> <Button 
                title ='See My work'
                icons={<FaCircleArrowRight />}
              /></a>
              
            </div>
          </div>    

      </div>
    </div>

    
  )
}

export default Hero
