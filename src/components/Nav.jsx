import React, { useState } from 'react'

const Nav = () => {
  
  const [toleft , setToleft] = useState(0);

  const handleLeft = (value) =>{
      setToleft(value)
  }

  return (
    <div className='text-teal-50  fixed z-40 left-[50%] translate-x-[-50%]   top-4 w-[80%]'>
       
        <div className='relative overflow-hidden bg-[rgb(0,0,19)]  rounded-full md:text-lg  justify-between  items-center full hidden sm:flex font-bold px-8  shadow-sm shadow-pink-500  ' 
        >
          
        <a href='#Home' className='relative h-full px-8 py-4' onClick={() => handleLeft(0)}><h1 >Home</h1> 
        <div 
                className='absolute z-50 w-full h-full bg-pink-500 rounded-full blur-md ' 
                style={{ left: `${toleft}%` }} 
              />
        </a>
        <a href='#about ' className='h-full px-8 py-4' onClick={() => handleLeft(200)}><h1 >About</h1></a>
        <a href='#skills'className='h-full px-8 py-4'><h1 >Skills</h1></a>
        <a href='#projects'className='h-full px-8 py-4 '><h1 >Projects</h1></a>
        <a href='#contact' className='h-full px-8 py-4 '><h1 >Contacts</h1></a>

        
        </div>
        <div className='absolute flex items-center justify-end w-full p-4 sm:hidden '> Hellow</div>
    </div>
  )
}

export default Nav
