import {BiCheck} from 'react-icons/bi'
import { services1, services2,services3 } from '../data'
import {motion,Variants} from 'framer-motion';
const cardAnime1 ={
  offScreen:{
    opacity: 0,
  },
  onScreen:{
    opacity:1,
    transition:{duration:.5}
  }
}
const cardAnime2 ={
  offScreen:{
    opacity: 0,
  },
  onScreen:{
    opacity:1,
    transition:{duration:.5}
  }
}
const cardAnime3 ={
  offScreen:{
    opacity: 0,
  },
  onScreen:{
    opacity:1,
    transition:{duration:.5}
  }
}
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <motion.article
          initial="offScreen"
          whileInView="onScreen"
          variants={cardAnime1}
         className="service">
          <div className="service_head">
            <h3>User Interface</h3>
          </div>
          <ul className="service_list">
              {
                services1.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
          </ul>
        </motion.article>

        <motion.article 
          initial="offScreen"
          whileInView="onScreen"
          variants={cardAnime2}
        className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
              {
                services2.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
          </ul>
        </motion.article>

        <motion.article
          initial="offScreen"
          whileInView="onScreen"
        variants={cardAnime3}
         className="service">
          <div className="service_head">
            <h3>Work Compatibility</h3>
          </div>
          <ul className="service_list">
              {
                services3.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
          </ul>
        </motion.article>

      </div>
    </section>
  )
}
