import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {projects} from '../Data/Projects.js'

const Projects = () => {

  console.log(projects);
  return (
    <section  className='relative flex flex-col items-center w-full mt-40 py-9 gap-y-8'>

    <span className='z-0 opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[50%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-pink-500 to-transparent rounded-full ' />

      {/**Main content */}
      <div className='z-10 flex items-center justify-between w-full p-0'>
        <h1 className=" md:text-[5em] text-[4em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none">My Projects</h1>
        
        <div className='lg:text-[20em] md:text-[15em] sm:text-[10em] text-[8em] text-pink-500 rotate-[90deg]'
        
        ><HiOutlineArrowLongRight /></div>
      </div>

      <div className='z-10 flex flex-col w-full'>
          {projects && projects.map((item, idx) => (
            <div key={idx} className='flex items-center justify-start gap-8 p-16 text-teal-50'>

              {item.id%2 == 0 ? (
                <>
                <div className='w-[50%] h-[200px] bg-yellow-100'>Hello</div>

                <div className='relative flex flex-col items-end justify-start text-left text-teal-50 right-20 gap-y-4'>
                <h1 className='text-5xl font-bold'>{item.title}</h1>
                <h1 className='text-2xl'>{item.description}</h1>
                </div>
                </>
              ) : (

                <>
                <div className='relative z-50 flex flex-col items-start justify-center left-20 text-teal-50 gap-y-4'>
                <h1 className='text-5xl font-bold'>{item.title}</h1>
                <h1 className='text-2xl'>{item.description}</h1>
                </div>
                
                <div className= {`bg-purple-950/10 cursor-pointer hover:scale-[110%]  rounded-[30px] transition-all relative w-[50%] h-[300px] `} 
                >
                  <a href={`${item.link}`} target='_blank'><div className='absolute flex items-center justify-center w-full h-full text-5xl opacity-0 bg-zinc-800/30  rounded-[30px] hover:opacity-100 jflex'><h1>Click here</h1></div></a>

                  <div className='z-20 w-full h-full ' style={{backgroundImage : `url(${item.pic})` , backgroundSize : '100%', backgroundRepeat : 'no-repeat' , backgroundPosition : 'center'}}></div>
                  
                </div>

                </>
              )}
            </div>
          ) )}
      </div>
    </section>
  )
}

export default Projects
