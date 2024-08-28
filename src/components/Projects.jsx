import React, { useEffect, useState }  from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { projectsweb , projectsDesigning} from '../Data/Projects.js'
import { initAOS } from '../Animation/AosAnimation';

const Projects = () => {

  useEffect(() => {
    initAOS( 200 , 100 , 1000);
  }, []); 


  const [showtype , setShowtype] = useState("Dev");

  const handleshowtype = () => {

    showtype === "Dev" ? setShowtype("") : setShowtype("Dev")
  }




  return (


    <section  className='relative flex flex-col items-center w-full px-8 mt-40 py-9 gap-y-8 text-teal-50' id='projects'>

    <span data-aos="fade-left"  className=' absolute -right-20 z-0 top-40 blur-3xl w-[20em] h-[20em] bg-gradient-to-l from-[#d017b8]/20 to-[rgba(255,3,179,0.1)] rounded-full pointer-events-none' />

    <span data-aos="fade-left"  className=' absolute z-0 -left-20 top-[80%] blur-3xl w-[25em] h-[25em]  bg-gradient-to-b bg-gradient-to-l from-blue-700/20 to-transparent rounded-full pointer-events-none' />

  <span data-aos="fade-right" className=' z-0 absolute -right-20 top-[60%] blur-3xl  bg-gradient-to-l w-[30em] h-[30em] from-[#fa3de1]/20 to-transparent rounded-full pointer-events-none' /> 

  <span data-aos="fade-left"  className=' absolute z-0 -left-20 top-[40%] blur-3xl w-[25em] h-[25em]  bg-gradient-to-b bg-gradient-to-l from-blue-700/20 to-transparent rounded-full pointer-events-none' /> 

      {/**Main content */}

      {/* header and logo start */}
      <div className='z-10 flex items-center justify-between w-full p-0'>
        <h1 className=" md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold text-teal-50 leading-none"  data-aos="fade-right">My Projects</h1>
        
        <div className='lg:text-[20em] md:text-[15em] sm:text-[10em] text-[7em] text-[#d017b8] rotate-[90deg]'
        
        data-aos="fade-right"><HiOutlineArrowLongRight /></div>
      </div>

      {/* heder and logo end  */}

      {/* Switch start  */}
      <div className='flex items-center justify-center w-full gap-8 py-8 -mt-20 text-xl font-bold border-b-4 border-teal-50'>

        <h1 className={`${showtype === "Dev" ? 'text-[#d017b8] ' : 'text-teal-50' } cursor-pointer`} onClick={handleshowtype}>Developement</h1>
        <h1 className={`${showtype !== "Dev" ? 'text-[#d017b8] ' : 'text-teal-50' } cursor-pointer`} onClick={handleshowtype}>Designing</h1>
      </div>

      {/* Switch ends  */}

      {showtype === "Dev" ? (
        <>
          <div className='z-10 flex flex-col w-full gap-16 sm:gap-y-8'  >
            {projectsweb && projectsweb.map((item, idx) => (
            <div key={idx} className='flex flex-col items-center justify-start gap-8 py-8 sm:bg-pink-50/0 rounded-3xl bg-[rgb(0,0,19)]10 sm:py-0 sm:border-none border-b-2 border-pink-400 sm:flex-row text-teal-50'>

              {item.id%2 == 0 ? (
                <>
                <div className= {`bg-purple flex-1 -950/10 cursor-pointer md:hover:scale-[110%]  rounded-[30px] transition-all relative h-[300px] `} >
                
                <a href={`${item.link}`} target='_blank'><div className='z-20 absolute flex items-center justify-center w-full h-full text-5xl opacity-0 bg-zinc-800/30  rounded-[30px] md:hover:opacity-100 jflex'><h1>Visit site</h1></div></a>

                
                  <div className='z-20 w-full ' >
                    <video autoPlay muted playsInline loop className='z-0 object-contain sm:absolute bottom-0 right-0 rounded-[30px] h-full'>
                        <source src={item.pic} type='video/mp4' />
                    </video>
                  </div>
                
                </div>

                <div className='flex flex-col items-center justify-center flex-1 sm:relative text-teal-50 gap-y-4'>
                <h1 className='text-3xl font-bold md:text-5xl sm:text-4xl'>{item.title}</h1>
                <h1 className='text-lg md:text-2xl sm:text-xl'>{item.description}</h1>
                </div>
                </>
              ) : (

                <>
                <div className='z-50 flex flex-col items-start justify-center sm:relative left-20 text-teal-50 gap-y-4'>
                <h1 className='text-3xl font-bold md:text-5xl sm:text-4xl'>{item.title}</h1>
                <h1 className='text-lg md:text-2xl sm:text-xl'>{item.description}</h1>
                </div>
                
                <div className= {`bg-[#d017b8]/10 cursor-pointer hover:scale-[110%]  rounded-[30px] transition-all relative w-full sm:w-[50%] h-[300px] `} >
                
                  <a href={`${item.link}`} target='_blank'><div className='absolute flex items-center justify-center w-full h-full text-5xl opacity-0 bg-zinc-800/30  rounded-[30px] hover:opacity-100 jflex'><h1>Visit Site</h1></div></a>

                  <div className='z-20 w-full h-full ' style={{backgroundImage : `url(${item.pic})` , backgroundSize : '100%', backgroundRepeat : 'no-repeat' , backgroundPosition : 'center'}}></div>
                  
                </div>

                </>
                 )}
                </div>
              ) )}
            </div>
        </>

      ) : (
        <>
        <div className='flex flex-wrap items-center justify-center w-full gap-x-4 gap-y-16'>
          {projectsDesigning && projectsDesigning.map((item , idx) => (
              <div key={idx} className={item.className + "relative" } style={{transition : '0.5s'}}>
                <img src={item.img} style={{transition : '0.5s'}} alt="" className="object-cover hover:scale-[110%] cursor-pointer w-full h-full rounded-lg" />
                
              </div>
          ))}
        </div>
        </>

      )}


    </section>
  )
}

export default Projects
