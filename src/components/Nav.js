import {useState} from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
export const Nav = () => {
  const [activeNav, setActive] = useState('');
  return (
   <nav>
     <a href="#home" 
      onClick={()=>setActive('#')} 
      className={activeNav ==="#"? 'active':''}>
      <AiOutlineHome/>
      </a>
     <a href="#about" 
      onClick={()=>setActive('#about')} 
      className={activeNav ==="#about"? 'active':''} >
      <AiOutlineUser/>
      </a>
      <a href="#experience" 
      onClick={()=>setActive('#experience')}
      className={activeNav ==="#experience"? 'active':''}>
        <AiOutlineHome/>
        </a>
     <a href="#services" 
     onClick={()=>setActive('#services')} 
     className={activeNav ==="#services"? 'active':''}>
      <AiOutlineHome/>
      </a>
      <a href="#potfolio" 
      onClick={()=>setActive('#potfolio')}
      className={activeNav ==="#potfolio"? 'active':''}>
      <AiOutlineHome/>
        </a>
     <a href="#contact" 
      onClick={()=>setActive('#contact')} 
     className={activeNav ==="#contact"? 'active':''}>
      <AiOutlineHome/>
      </a>
   </nav>
  )
}
