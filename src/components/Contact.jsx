import React from 'react'

const Contact = () => {
  return (
    <section className=' text-teal-50 relative flex flex-col items-center w-full mt-40 gap-y-8 ' id='contact'>
       

         <span className='z-0 opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[40%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-pink-500 to-transparent rounded-full pointer-events-none' />

        <span className='z-0 opacity-30 absolute -left-20 -bottom-10 blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full pointer-events-none' /> 

        <span className='z-[5] opacity-30 absolute -left-20  blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-pink-700 to-transparent rounded-full pointer-events-none' /> 

        <h1 className="relative pointer-events-none  md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold  leading-none">Contact Me</h1>

        {/* Starting form container */}
        <div className='relative overflow-hidden w-full flex justify-center items-center'>
          
          <div className='z-[0] w-[300px] h-[300px] rounded-full  bg-pink-500 absolute left-0 -top-20 flex justify-center items-center'>
            <div className='w-[60%] rounded-full h-[60%] bg-[rgb(0,0,19)]'></div>
          </div>
          <div className='z-10 w-3/4 md:px-28 sm:px-12 px-4 py-12 bg-[rgb(0,0,19)] md:max-w-[70%]'>

            <p className='text-lg mt-12 ml-6'> Full name</p>
            <input type='text ' placeholder='Enter Your full name.... ' className='w-full p-4 outline-none border-none bg-pink-900/20 rounded-3xl text-teal-50'/>

            <p className='text-lg mt-12 ml-6'> Email</p>
            <input type='text ' placeholder='Enter Your email.... ' className='w-full p-4 outline-none border-none bg-pink-900/20 rounded-3xl text-teal-50'/>

            <p className='text-lg mt-12 ml-6'> Massage</p>
            <textarea placeholder='Enter Your full name.... ' className='w-full p-4 outline-none border-none bg-pink-900/20 rounded-3xl text-teal-50'/>

            <button className='relative left-[50%] translate-x-[-50%] bg-pink-500 md:px-32 px-16 py-2 rounded-full text-2xl font-bold mt-12'>Send</button>
          </div>
        </div>

    </section>
  )
}

export default Contact
