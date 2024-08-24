import React from 'react'

const Nav = () => {
  return (
    <div className='fixed left-[50%] translate-x-[-50%] mt-8 z-50 max-w-xl px-16 py-4 bg-zinc-800 rounded-[30px]'>
      <div className='flex items-center justify-between gap-8 text-teal-50' >
        <div className='flex items-center justify-center gap-8'>
            <p>Home</p>
            <a href='#About'><p>About</p></a>
            <p>Portfolio</p>
            <p>Connect</p>
        </div>
        <div className='p-4 bg-pink-800 switch w-7 rounded-3xl'>

        </div>

      </div>
    </div>
  )
}

export default Nav
