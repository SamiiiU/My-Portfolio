import React, { useState } from 'react'

const Contact = () => {
  const [name , setName] = useState("");
  const [gmail , setGmail] = useState("");
  const [Massage , setMassage ] = useState("");
  const [sent , setSend ] = useState(false);

  const handleSend = () => {
     setName("");
     setGmail("");
     setMassage("");
     setSend(true)


  }
  return (
    <section className='relative flex flex-col items-center w-full mt-40 text-teal-50 gap-y-8' id='contact'>
       

         <span className='z-50 opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[40%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-pink-500/50 to-transparent rounded-full pointer-events-none' />
         <span className='z-50 opacity-30 absolute -right-20 bottom-[40%] blur-[40px] w-[40%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-blue-700/20 to-transparent rounded-full pointer-events-none' />

        <span className='z-0 opacity-30 absolute -left-20 -bottom-10 blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full pointer-events-none' /> 

        <span className='z-[5] opacity-30 absolute -left-20  blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-pink-700 to-transparent rounded-full pointer-events-none' /> 

        <h1 className="relative pointer-events-none  md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold  leading-none">Contact Me</h1>

        {/* Starting form container */}
        <div className='relative flex items-center justify-center w-full overflow-hidden '>
          
          {/* Design element start */}
          <div className='z-[0] w-[300px] h-[300px] rounded-full  bg-pink-500 absolute left-0 -top-20 flex justify-center items-center'>
            <div className='w-[60%] rounded-full h-[60%] bg-[rgb(0,0,19)]'></div>
          </div>
          {/* Designe element end */}

          <div className='z-10 w-full md:px-28 sm:px-12 px-4 py-12 bg-[rgb(0,0,19)] md:max-w-[70%]'>

            

            <p className='mt-12 ml-6 text-lg'> Full name</p>

            <input type='text ' placeholder='Enter Your full name.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={name} onChange={(e) => setName(e.value)}/>

            <p className='mt-12 ml-6 text-lg'> Email</p>
            <input type='text ' placeholder='Enter Your email.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={gmail} onChange={(e) => setGmail(e.value)}/>

            <p className='mt-12 ml-6 text-lg'> Massage</p>
            <textarea placeholder='Enter Your full name.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={Massage} onChange={(e) => setMassage(e.value)}/>

            <h1 className={`relative ${sent ? 'visible' : 'hidden'} mt-4 translate-x-[-50%] left-[50%] inline-block text-xl`}>Massage Has Been sent Thank you for contacting</h1>
            <button className='relative left-[50%] translate-x-[-50%] bg-pink-500 md:px-32 px-16 py-2 rounded-full text-2xl font-bold mt-12 ' onClick={handleSend}>Send</button>
          </div>
        </div>

    </section>
  )
}

export default Contact
