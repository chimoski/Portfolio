import {useState} from 'react'
import {AiOutlineHome,AiOutlineUser, AiOutlineFolderOpen} from 'react-icons/ai'
import {RiStackLine} from 'react-icons/ri'
import {MdMiscellaneousServices, MdContactPhone} from 'react-icons/md'
export const Nav = ({headerID}) => {
  const [activeNav, setActive] = useState('');
 
  return (
   <nav>
     <a href="#home" 
     title='home'
      onClick={()=>setActive('#')} 
      className={activeNav ==="#"? 'active':''}>
      <AiOutlineHome/>
      </a>
     <a href="#about" 
     title='About Me'
      onClick={()=>setActive('#about')} 
      className={activeNav ==="#about"? 'active':''} >
      <AiOutlineUser/>
      </a>
      <a href="#experience" 
      title='Experience'
      onClick={()=>setActive('#experience')}
      className={activeNav ==="#experience"? 'active':''}>
        <RiStackLine/>
        </a>
     <a href="#services" 
     title='services'
     onClick={()=>setActive('#services')} 
     className={activeNav ==="#services"? 'active':''}>
     <MdMiscellaneousServices/>
      </a>
      <a href="#potfolio" 
       title='Portfolio'
      onClick={()=>setActive('#potfolio')}
      className={activeNav ==="#potfolio"? 'active':''}>
         <AiOutlineFolderOpen/>
        </a>
     <a href="#contact" 
     title='Contact'
      onClick={()=>setActive('#contact')} 
     className={activeNav ==="#contact"? 'active':''}>
      <MdContactPhone/>
      </a>
   </nav>
  )
}
