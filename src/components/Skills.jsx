import React, { useState , useEffect} from 'react'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { bar } from '../Data/Skillsbar';
import { Skill } from '../Data/Skillsbar';
import { initAOS } from '../Animation/AosAnimation';
const Skills = () => {
       

  useEffect(() => {
    initAOS( 200 , 0 , 1000);
  }, []); 

  return (
    <section  className='relative flex flex-col items-center w-full px-8 mt-10 gap-y-8' id='skills'>


    <span data-aos="fade-left"  className=' absolute -right-20 z-0 top-40 blur-3xl w-[40%] h-[40%] bg-gradient-to-l from-[#d017b8]/20 to-[rgba(255,3,179,0.1)] rounded-full pointer-events-none' />

    <span data-aos="fade-left"  className=' absolute z-0 -left-20 top-[80%] blur-3xl w-[40%] h-[40%]  bg-gradient-to-b bg-gradient-to-l from-blue-700/20 to-transparent rounded-full pointer-events-none' />

      <span data-aos="fade-right" className=' z-0 absolute -left-32 blur-3xl  bg-gradient-to-l w-[40%] h-[40%] from-[#fa3de1]/20 to-transparent rounded-full pointer-events-none' />  

      {/* Main content */}
      <div className='flex items-center justify-between w-full gap-16 p-0 '>
        <h1 className=" md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none" data-aos="fade-right">My Skills</h1>
        
        <div className='lg:text-[20em] md:text-[15em] sm:text-[10em] text-[8em] text-[#d017b8]  '
        
        data-aos="fade-left"><HiOutlineArrowLongLeft /></div>
      </div>

         <div className='grid items-center justify-start w-full grid-cols-1 md:-mt-8 gap-x-16 gap-y-8 md:grid-cols-2'>
        
            {Skill && Skill.map((item , idx) => (
                <div key={idx} className='flex items-center justify-start gap-2 sm:gap-8 ' data-aos="fade-right">
                    <h1 className='flex-1 text-xl font-bold xl:text-4xl sm:text-2xl text-teal-50'>{item.Name}</h1>
                    <div className='flex items-center justify-center flex-1 gap-4 '>
                    {bar && bar.map((idxs) =>(
                    <span key={idxs} className={`xl:w-4 xl:h-4 sm:w-3 sm:h-3 w-2 h-2  ${idxs < item.Progress ? 'bg-[#d017b8]' : 'bg-[#d017b7]/30'}  rounded-full`}></span>
                    ))}
                </div>
                </div>
            ))
                
            }
        </div>

    </section>
  )
}

export default Skills
