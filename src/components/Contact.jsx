import React, { useState , useEffect } from 'react'
import { initAOS } from '../Animation/AosAnimation';

const Contact = () => {

  useEffect(() => {
    initAOS( 200 , 100 , 1000);
  }, []);

  const [name , setName] = useState("");
  const [gmail , setGmail] = useState("");
  const [Massage , setMassage ] = useState("");
  const [sent , setSend ] = useState(false);
  const [result , setResult] = useState("");

  const handleSend = () => {
    
    if(name !== "" && gmail !== "" && Massage !== ""){
      setName("");
      setGmail("");
      setMassage("");
      setResult("Massage Has Been sent Thank you for contacting")
      setSend(true)
    }

    else{
      setResult("Please fill all input fields")
      setSend(true)
      console.log("yera result ",result)
    }



  }
  return (
    <section className='flex flex-col items-center w-full mt-40 sm:relative text-teal-50 gap-y-8' id='contact'>
       

         <span className='z-50 opacity-30 absolute -right-20 bottom-0 blur-[40px] w-[40%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-pink-500/50 to-transparent rounded-full pointer-events-none' />
         <span className='z-50 opacity-30 absolute -right-20 bottom-[40%] blur-[40px] w-[40%] h-[40%] bg-gradient-to-tr bg-gradient-to-bl from-blue-700/20 to-transparent rounded-full pointer-events-none' />

        <span className='z-0 opacity-30 absolute -left-20 -bottom-10 blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-blue-700 to-transparent rounded-full pointer-events-none' /> 

        <span className='z-[5] opacity-30 absolute -left-20  blur-[100px] w-[20em] h-[20em] bg-gradient-to-tr bg-gradient-to-bl from-[#d017b8] to-transparent rounded-full pointer-events-none' /> 

        <h1 data-aos="fade-up" className="relative pointer-events-none  md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold  leading-none">Contact Me</h1>

        {/* Starting form container */}
        <div className='relative flex items-center justify-center w-full overflow-hidden '>
          
          {/* Design element start */}
          <div className='z-[0] w-[300px] h-[300px] rounded-full  bg-[#d017b8] absolute left-0 -top-20 flex justify-center items-center'>
            <div className='w-[60%] rounded-full h-[60%] bg-[rgb(0,0,19)]'></div>
          </div>
          {/* Designe element end */}

          <div className='z-10 w-full md:px-28 sm:px-12 px-4 py-12 bg-[rgb(0,0,19)] md:max-w-[70%]'>

            

            <p data-aos="fade-right" className='mt-12 ml-6 text-lg'> Full name</p>

            <input data-aos="fade-right" type='text ' placeholder='Enter Your full name.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={name} onChange={(e) => setName(e.value)}/>

            <p data-aos="fade-right" className='mt-12 ml-6 text-lg'> Email</p>
            <input data-aos="fade-right" type='text ' placeholder='Enter Your email.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={gmail} onChange={(e) => setGmail(e.value)}/>

            <p data-aos="fade-right" className='mt-12 ml-6 text-lg'> Massage</p>
            <textarea data-aos="fade-right" placeholder='Enter Your full name.... ' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={Massage} onChange={(e) => setMassage(e.value)}/>

            <h1  className={`text-center ${sent ? 'visible' : 'hidden'} mt-4  text-xl`}>{result}</h1>
            
            <button  className=' relative left-[50%] translate-x-[-50%] hover:bg-[#aa1496] bg-[#d017b8] md:px-32 px-16 py-2 rounded-full text-2xl font-bold mt-12 ' onClick={handleSend}>Send</button>
          </div>
        </div>

    </section>
  )
}

export default Contact
