import {BsPatchCheckFill} from 'react-icons/bs'
import { stack } from '../data'
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have ?</h5>
      <h2>My Experiences</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
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
        </div>
        <div className="experience_backend">
        <h3>Backed Development</h3>
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
        </div>
      </div>
    </section>
  )
}
