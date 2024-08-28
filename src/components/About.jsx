import React, { useEffect } from 'react'
import Aboutpic from '../Images/Aboutme.jpg'
import { FaUser } from "react-icons/fa";
import { initAOS } from '../Animation/AosAnimation';

const About = () => {

  useEffect(() => {
    initAOS( 200 , 100 , 1000);
  }, []);

  return (
    <section className='relative w-full px-8 my-20' id="about">
        <span className='-rotate-45 opacity-30 absolute right-20 top-40 blur-[100px] w-[30%] h-[30%] p-[200px] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full ' />

        <span className=' opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[50%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl bg-[#d017b8] to-transparent rounded-full ' />

        <span className=' opacity-30 absolute -left-20 -bottom-10 blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full ' />

        {/*Main conent*/}


        <div className='flex flex-col w-full h-full gap-y-8 md:flex-row '>
        <div className='flex flex-col items-center gap-y-8 md:justify-center md:items-start md:w-1/2'>
        <h1 className='z-30 md:absolute top-0 left-[30%] sm:text-[5em] text-[4em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none' data-aos="fade-left"> About Me</h1>

        <div data-aos="fade-right" className="xl:w-[28em] xl:h-[28em] sm:w-[22em] sm:h-[22em] w-[16em] h-[16em] rounded-full bg-gradient-to-br bg-[#d017b8] via-blue-400 to-transparent "
        
        style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(255,105,180, 0.2), rgba(65,105,225, 0.2)), url(${Aboutpic})` , 
            backgroundSize : 'cover', 
            
            backgroundPosition : 'center',
        }}/>

        
        </div>

        <div data-aos="fade-right" className='flex flex-col justify-center gap-y-16 md:w-1/2'>
            <div className='flex justify-end w-full text-[#d017b8] text-[4em]'><FaUser  /></div>
            <h1 className='text-xl text-justify text-teal-50 opacity-80'>I'm a dedicated designer and developer who thrives on the intersection of creativity and technology. With a deep passion for coding, I build dynamic and responsive web experiences that captivate users. My expertise extends to animation, where I bring ideas to life with fluid motion and engaging visuals. Every project I undertake reflects my commitment to excellence, combining innovative design with technical precision to create compelling digital experiences.</h1>
        </div> 
          </div>  

         
    </section>

  )
}

export default About
