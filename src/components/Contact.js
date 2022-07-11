import {useState} from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  toast  from 'react-hot-toast';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {ThreeDots } from  'react-loader-spinner'
import {motion} from 'framer-motion';

const cardAnime1 = {
  offScreen :{
    opacity: 0,
    x: -100
  },
  onScreen:{
    opacity: 1,
    x:0,
    transition: {duration:1, ease:'easeInOut'}
  }
}

const cardAnime2 = {
  offScreen :{
    opacity: 0,
    x: 100
  },
  onScreen:{
    opacity: 1,
    x:0,
    transition: {duration:1, ease:'easeInOut'}
  }
}
const cardAnime3 = {
  offScreen :{
    opacity: 0,
    x: -100
  },
  onScreen:{
    opacity: 1,
    x:0,
    transition: {duration:1, ease:'easeInOut'}
  }
}
export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9wk15kd', 'template_x6rv23g', form.current, '4Tr3MZE3CLfUIgjzc',
  setIsLoading(true)
    )
  
      .then((result) => {
        toast.success('Message successfully sent');
        setIsLoading(false)
        console.log(result);
      }, (error) => {
        setIsLoading(false)
        toast.error('Opps! something went wrong. check your internet connection and try again');
      });
      e.target.reset();
  };
 
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <motion.article
            initial ="offScreen"
            whileInView="onScreen"
            variants={cardAnime1}
           className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>chimaobiprince867@gmail.com</h5>
            <a href="mailto:chimaobiprince867@gmail.com" target="blank">Send a Message</a>
          </motion.article>

          <motion.article
            initial ="offScreen"
            whileInView="onScreen"
            variants={cardAnime2}
           className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Prince Chimaobi</h5>
            <a href="https://m.me/prince.chimaobi"  target="blank">Send a Message</a>
          </motion.article>

          <motion.article
            initial ="offScreen"
            whileInView="onScreen"
            variants={cardAnime3}
           className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whtasapp</h4>
            <h5>+234**********</h5>
            <a href="https://api.whatsapp.com/send?phone+2347030399140" target="blank">Send a Message</a>
          </motion.article>
        </div>
        <form action='' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" placeholder='Email'  required />
          <textarea name="message" placeholder='Your Message' required rows="7">
          </textarea>
          <button type='submit'
          style={ isLoading ? { cursor:'text'}: {cursor: 'pointer'}}
           disabled={isLoading} className="btn btn-primary">{
            isLoading ? <ThreeDots
            height="10"
            width="100"
            color='#2c2c6c'
            ariaLabel='loading'
          /> : 'Send a mesage'
          }</button>
        </form>
      </div>
    </section>
  )
}
