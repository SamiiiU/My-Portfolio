import React , {useEffect} from 'react'
import { Spotlight } from './UI/Spotlight'

import { initAOS } from '../Animation/AosAnimation';
import { TextGenerateEffect } from './UI/TextEffect';

const Home = () => {

  useEffect(() => {
    initAOS( 200 , 300 , 1000);
  }, []); 
  return (


    <section className='flex flex-col items-center justify-center px-8 md:h-screen' id='Home'>
      
         <Spotlight className="h-screen -top-10 left-20 md:left-32 md:-top-20" fill="white"/>
        
     <span data-aos="fade-left" data-aos-delay= "800" className=' absolute -right-20 z-0 top-40 blur-3xl w-[60%] p-[200px] bg-gradient-to-l from-[#d017b8] to-[rgba(255,3,179,0.1)] rounded-full pointer-events-none' />

       <span data-aos="fade-left" data-aos-delay= "800" className=' absolute z-0 -right-20 -top-40 blur-3xl p-[200px] bg-gradient-to-b bg-gradient-to-l w-[60%] from-blue-700 to-transparent rounded-full pointer-events-none' />
   
       <span data-aos="fade-right" className=' z-0 absolute -right-20 top-72 blur-3xl p-[100px] bg-gradient-to-l w-[30%] from-[#fa3de1] to-transparent rounded-full pointer-events-none' />
  
     {/* Main content*/}       
     <div className='flex flex-col items-center justify-center w-full pt-32 overflow-hidden gap-x-8 gap-y-16 md:items-start md:flex-row'>
        <div className='text-white md:w-[50%]  h-full flex flex-col justify-center md:items-start items-center gap-8'>
            <div  className="text-xl tracking-wide uppercase sm:text-2xl"><TextGenerateEffect words="Designer And Developer"/></div>
            <h1 data-aos="fade-right" data-aos-delay= "1000" className='font-bold text-[4em]  sm:text-[6em] leading-snug '>Sami Ullah</h1>
            
            <div data-aos="fade-right" data-aos-delay= "100" className='px-4 text-xl text-center md:border-l-4 md:text-2xl md:text-left border-teal-50'>I am Reactjs Developer  and a designer , i work remotely from Pakistan</div>
        </div>
        <div className='relative items-center  md:w-[50%]'>
                
        <div data-aos="fade-right" className=' relative overflow-hidden animate-spin  xl:w-[28em] xl:h-[28em] sm:w-[22em] sm:h-[22em] w-[16em] h-[16em] bg-pink-300 rounded-full'>
            <span className='relative block w-full h-full  bg-gradient-to-r from-teal-400 to-transparent blur-xl p-[100px] rounded-full' />
            <span className='absolute block w-full h-full  right-5 bg-gradient-to-l from-[#d017b8] to-transparent blur-xl p-[100px] rounded-full' />

        </div>



        </div>
       
        
        
     </div>
    </section>

  )
}

export default Home
