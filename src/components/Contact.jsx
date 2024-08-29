import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { initAOS } from '../Animation/AosAnimation';

const Contact = () => {
  useEffect(() => {
    initAOS(200, 100, 1000);
  }, []);

  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSend] = useState(false);
  const [result, setResult] = useState("");

  const handleSend = () => {
    if (name !== "" && gmail !== "" && message !== "") {
      const templateParams = {
        name: name,
        to_name : "Sami" ,
        gmail: gmail,
        message: message,
      };

      emailjs.send(
        'service_9wdv78p',
        'template_l5vzds7', 
        templateParams,
        'KMjSwQzTT4RVy5UWU' 
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResult("Message has been sent. Thank you for contacting!");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setResult("Failed to send message. Please try again.");
      });

      setName("");
      setGmail("");
      setMessage("");
      setSend(true);
      
    } else {
      setResult("Please fill all input fields");
      setSend(true);
    }
  };

  return (
    <section className='flex flex-col items-center w-full mt-10 sm:relative text-teal-50 gap-y-8' id='contact'>
      <h1 data-aos="fade-up" className="relative pointer-events-none  md:text-[5em] text-[3em] lg:text-[6em] font-josefin font-bold leading-none">Contact Me</h1>
      
      <div className='relative flex items-center justify-center w-full overflow-hidden '>
        <div data-aos="fade-up" className='z-10 w-full md:px-28 sm:px-12 px-4 py-12 bg-[rgb(0,0,19)] md:max-w-[70%]'>
          
          <p className='mt-12 ml-6 text-lg'> Full name</p>
          <input type='text' placeholder='Enter Your full name....' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={name} onChange={(e) => setName(e.target.value)} />

          <p className='mt-12 ml-6 text-lg'> Email</p>
          <input type='email' placeholder='Enter Your email....' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={gmail} onChange={(e) => setGmail(e.target.value)} />

          <p className='mt-12 ml-6 text-lg'> Message</p>
          <textarea placeholder='Enter Your message....' className='w-full p-4 border-none outline-none bg-pink-900/20 rounded-3xl text-teal-50' value={message} onChange={(e) => setMessage(e.target.value)} />

          <h1 className={`text-center ${sent ? 'visible' : 'hidden'} mt-4 text-xl`}>{result}</h1>
          
          <button className='relative left-[50%] translate-x-[-50%] hover:bg-[#aa1496] bg-[#d017b8] md:px-32 px-16 py-2 rounded-full text-2xl font-bold mt-12' onClick={handleSend}>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
