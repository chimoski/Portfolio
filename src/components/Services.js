import {BiCheck} from 'react-icons/bi'
import { services } from '../data'
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
              {
                services.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
              {
                services.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
              <li> 
              <BiCheck className='service_list-icon' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Writing</h3>
          </div>
          <ul className="service_list">
              {
                services.map((item,i)=>(
                 <li key={i}>
                   <BiCheck className='service_list-icon' />
                  <p>{item}</p>
                 </li>
                ))
              }
          </ul>
        </article>

      </div>
    </section>
  )
}
