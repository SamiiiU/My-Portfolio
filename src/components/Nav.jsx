import React, { useState , useEffect} from 'react'
import { RiMenuFoldFill } from "react-icons/ri";

const Nav = () => {
  
  const [toleft , setToleft] = useState(0);
  const [open , setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(true)
  }

  const handleClose = () =>{
    setOpen(false);
  }

  const handleLeft = (value) =>{
      setToleft(value)
  }




  const handleScroll = () => {
    const sections = document.querySelectorAll('section');

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;


      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    switch (currentSection) {
      case 'Home':
        setToleft(0);
        break;
      case 'about':
        setToleft(20);
        break;
      case 'skills':
        setToleft(40);
        break;
      case 'projects':
        setToleft(60);
        break;
      case 'contact':
        setToleft(80);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className=' text-teal-50 fixed z-50 left-[50%] translate-x-[-50%]  top-4 w-[80%]'>
       
        <div className='relative overflow-hidden bg-[rgb(0,0,19)] rounded-full md:text-lg justify-between items-center flex md:visible invisible font-bold px-8 shadow-sm shadow-[#d017b8]  ' 
        >
          <div 
                className='absolute z-50 w-[18%] h-full -bottom-[70%] bg-[#d017b8]/40 rounded-full blur-md ' 
                style={{ left: `${toleft}%` , transition : '0.5s'}} 
              />
          
        <a href='#Home' className='h-full px-8 py-4' onClick={() => handleLeft(0)}><h1 >Home</h1> </a>        
        <a href='#about ' className='h-full px-8 py-4' onClick={() => handleLeft(20)}><h1 >About</h1></a>
        <a href='#skills'className='h-full px-8 py-4' onClick={() => handleLeft(40)}><h1 >Skills</h1></a>
        <a href='#projects'className='h-full px-8 py-4 ' onClick={() => handleLeft(60)}><h1 >Projects</h1></a>
        <a href='#contact' className='h-full px-8 py-4 ' onClick={() => handleLeft(80)}><h1 >Contacts</h1></a>

        
        </div>

        <div className={`absolute z-50 ${open ? 'hidden' : 'visible'} flex items-center justify-end w-full -mt-10 text-4xl md:hidden`} onClick={handleOpen}> <RiMenuFoldFill/> </div>

        
    </div>

    <div className={` text-teal-50 backdrop-blur-sm z-40   w-full h-screen flex justify-center items-center flex-col gap-8 text-3xl fixed top-0 ${open ? 'left-0' : 'left-[100%]'} bg-[rgb(0,0,19)]/40 `} style={{transition : '0.5s'}}>

    <div className='absolute z-50 text-4xl font-bold rotate-180 left-4 top-8 ' onClick={handleClose}> <RiMenuFoldFill/></div>

    <div className='flex flex-col items-center justify-center w-full gap-8'>

    <a href='#Home' ><h1 >Home</h1> </a>
    <a href='#about '  ><h1 >About</h1></a>
    <a href='#skills' ><h1 >Skills</h1></a>
    <a href='#projects' ><h1 >Projects</h1></a>
    <a href='#contact'  ><h1 >Contacts</h1></a>

    </div>

    </div>

    </>
  )
}

export default Nav
