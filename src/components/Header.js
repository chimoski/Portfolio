import  Cta  from "./Cta.js";
import { HeaderSocials } from "./HeaderSocials.js";
import Freelancer from '../Freelancer.gif';
import {motion,Variants} from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {FaArrowAltCircleDown} from 'react-icons/fa';
const imageAnim = {
  offScreen:{opacity:0, y:200},
  onScreen:{
    opacity:1,
    y:0,
    transition:{duration: .5, ease:[0.17, 0.67, 0.83, 0.67]}
  }
}



export const Header = () => {
  return (
    <header id="home">
      <motion.div 
      initial="offScreen"
       whileInView="onScreen"
       transition={{staggerChildren:true, amount:0.2}}
       viewport={{once:false,enter:"onScreen",exit:"offScreen"}}
       className="container header_container">
        <h5>
          Hello I'm
        </h5>
        <h1>
        <Typewriter
      options={{
      strings: ['Prince Chimaobi'],
       autoStart: true,
         loop: true,
      }}
     />
        </h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div
         className="me">
          <motion.img
         variants = {imageAnim}
          src={Freelancer} alt="" />
        </div>
        <a
         href="#contact" className="scroll_down">
          <motion.div
            initial={{y:10}}
            animate={{y:20}}
            transition={{duration:1,repeat:Infinity, ease:'easeOut'}}
          >
             <FaArrowAltCircleDown />
          </motion.div>
         
        </a>
      </motion.div>
    </header>
  )
}
