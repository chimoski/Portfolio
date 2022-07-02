import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9wk15kd', 'template_x6rv23g', form.current, '4Tr3MZE3CLfUIgjzc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>chimaobiprince867@gmail.com</h5>
            <a href="mailto:chimaobiprince867@gmail.com" target="blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>Prince Chimaobi</h5>
            <a href="https://m.me/prince.chimaobi"  target="blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            <h4>Whtasapp</h4>
            <h5>+234**********</h5>
            <a href="https://api.whatsapp.com/send?phone+2347030399140" target="blank">Send a Message</a>
          </article>
        </div>
        <form action='' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" placeholder='Email'  required />
          <textarea name="message" placeholder='Your Message' required rows="7">
          </textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
