import React from 'react'
import Aboutpic from '../Images/Aboutme.jpg'
import { FaUser } from "react-icons/fa";

const About = () => {


  return (
    <section className='relative w-full my-20 ' id="about">
        <span className='-rotate-45 opacity-30 absolute right-20 top-40 blur-[100px] w-[30%] h-[30%] p-[200px] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full ' />

        <span className=' opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[50%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-pink-500 to-transparent rounded-full ' />

        <span className=' opacity-30 absolute -left-20 -bottom-10 blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full ' />

        {/*Main conent*/}


        <div className='flex flex-col w-full h-full gap-y-8 md:flex-row '>
        <div className='flex flex-col items-center gap-y-8 md:justify-center md:items-start md:w-1/2'>
        <h1 className='md:absolute top-0 left-[30%] sm:text-[5em] text-[4em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none'> About Me</h1>

        <div className="xl:w-[28em] xl:h-[28em] sm:w-[22em] sm:h-[22em] w-[16em] h-[16em] rounded-full bg-gradient-to-br from-pink-500 via-blue-400 to-transparent "
        
        style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(255,105,180, 0.2), rgba(65,105,225, 0.2)), url(${Aboutpic})` , 
            backgroundSize : 'cover', 
            
            backgroundPosition : 'center',
        }}/>

        
        </div>

        <div className='flex flex-col justify-center gap-y-16 md:w-1/2'>
            <div className='flex justify-end w-full text-pink-500 text-[4em]'><FaUser  /></div>
            <h1 className=' text-justify text-xl text-teal-50 opacity-80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quam optio error fugit cupiditate, labore recusandae facere aperiam eligendi accusantium iste sunt excepturi aut neque itaque possimus corrupti quis. Et.
            Maiores accusantium natus, qui tempore nemo quis beatae, facilis dignissimos eum voluptatem amet unde ab accusamus eaque iure magnam quae nostrum doloribus. Autem reprehenderit tempore expedita, corporis enim iste beatae.
            Dolorum voluptas, reiciendis blanditiis consequuntur optio temporibus ad ab minima ipsa porro tempore quis dolorem, doloribus odio aut et? Consequuntur unde impedit nulla? Iure reprehenderit deleniti quod tempore aliquid placeat!
            Rerum libero inventore optio ex minus voluptate sed aliquam delectus quos, dolorem modi impedit repudiandae quasi pariatur amet id porro autem? Sapiente nihil laborum a, assumenda modi illo repudiandae nesciunt.</h1>
        </div> 
          </div>  

         
    </section>

  )
}

export default About
