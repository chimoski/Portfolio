import React from 'react'
import {IoMdDownload} from 'react-icons/io'
import {motion,Variants} from 'framer-motion';


 const Cta = () => {
  return (
    <div className="cta">
        <a href='https://drive.google.com/file/d/15SMpZ2rE5nvw7LR-3bqEmsN1LgJivFTi/view' target="blank"  className='btn cta-btn'>
          Resume
        <motion.div
        initial={{y:10}}
        animate={{y:12}}
        transition={{duration:.5,repeat:Infinity, ease:'easeInOut'}}
        >
       
        <IoMdDownload color='#fff' className='cv-download'/>
        </motion.div>
        </a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Cta
