import {BsPatchCheckFill} from 'react-icons/bs'
import { stack } from '../data'
import { stacksLogo } from '../data'
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
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have ?</h5>
      <h2>My Experiences</h2>

      <div
      transition={{staggerChildren:true, amount:0.2}}
      viewport={{once:false,enter:"onScreen",exit:"offScreen"}}
       className="container experience_container">
        <motion.div
           initial="offScreen"
           whileInView="onScreen"
        variants={cardAnime1}
         className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {
              stack.map((item,i)=>(
            <article key={i} className="experience_details">   
             <BsPatchCheckFill className='experience-details-icon'/>          
             <div>
             <small>{item.level}</small>
               <h4>{item.lang}</h4>
             </div>
            </article>
              ))
            }
          </div>
        </motion.div>
        <motion.div 
         initial="offScreen"
         whileInView="onScreen"
         transition={{staggerChildren:true, amount:0.5}}
         variants={cardAnime2}
        className="experience_backend">
        <h3>Frontend Development</h3>
        <div className="experience_content experience-logo">
            {
              stacksLogo.map((item,i)=>(
            <article key={i} className="">      
              <img src={item} alt="" sizes='10'/>
            </article>
              ))
            }
          </div>
        </motion.div>
      </div>
    </section>
  )
}
