import React from 'react'
import { HiOutlineArrowLongDown, HiOutlineArrowLongLeft } from 'react-icons/hi2'
import { FloatingDock ,  FloatingDockDesktop } from './UI/floating-dock'
import { items } from '../Data/Folllowicons'

const Follow = () => {
  return (
    <section className='relative flex flex-col items-center justify-center w-full px-8 py-20'>

        <span data-aos="fade-left"  className=' absolute -right-20 z-0 top-40 blur-3xl w-[40%] h-[40%] bg-gradient-to-l from-[#d017b8]/20 to-[rgba(255,3,179,0.1)] rounded-full pointer-events-none' />

        <span data-aos="fade-right" className=' z-0 absolute -left-32 blur-3xl  bg-gradient-to-l w-[40%] h-[40%] from-[#fa3de1]/20 to-transparent rounded-full pointer-events-none' />  

      <div className='flex items-center justify-between w-full gap-16 mb-9 '>
        <h1 className=" text-[2em]  lg:text-[4em] font-josefin font-bold text-teal-50 leading-none" >Follow Me</h1>
        
        <div className='lg:text-[10em] md:text-[8em] sm:text-[10em] text-[7em] text-[#d017b8]  '
        
        ><HiOutlineArrowLongDown /></div>
      </div>

      < FloatingDock 
        items = {items}
        desktopClassName = ""
        mobileClassName= ""
      />
    </section>
  )
}

export default Follow
