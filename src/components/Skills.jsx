import React, { useState } from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { bar } from '../Data/Skillsbar';
import { Skill } from '../Data/Skillsbar';

const Skills = () => {
       

  return (
    <section  className='relative flex flex-col items-center w-full mt-40 gap-y-8' id='skills'>
      <div className='flex items-center justify-between w-full gap-16 p-0 '>
        <h1 className=" md:text-[5em] text-[4em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none">My Skills</h1>
        
        <div className='lg:text-[20em] md:text-[15em] sm:text-[10em] text-[8em] text-pink-500 rotate-180'
        
        ><HiOutlineArrowLongRight /></div>
      </div>

         <div className='grid items-center justify-start w-full  grid-cols-1 md:-mt-8 gap-x-16 gap-y-8 md:grid-cols-2'>
        
            {Skill && Skill.map((item , idx) => (
                <div key={idx} className='flex items-center justify-center gap-8 md:justify-start '>
                    <h1 className='xl:text-4xl w-28 sm:text-2xl text-xl font-bold  text-teal-50'>{item.Name}</h1>
                    <div className=' flex items-center justify-center gap-4'>
                    {bar && bar.map((idxs) =>(
                    <span key={idxs} className={`xl:w-4 xl:h-4 w-3 h-3  ${idxs < item.Progress ? 'bg-pink-500' : 'bg-pink-700/50'}  rounded-full`}></span>
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
