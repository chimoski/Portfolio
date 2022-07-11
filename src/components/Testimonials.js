// import Swiper core and required modules
// import { Pagination } from 'swiper';
import {motion,Variants} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials as data } from '../data'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const cardAnime = {
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

export const Testimonials = () => {

  return (
   <section id="testimonies">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper 
      // modules={[Pagination]}
      // spaceBetween={40}
      // slidesPerView={1}
      // pagination={{ clickable: true }}
    className="container testimonials_container">
    
      {
        data.map(item=>(
        

         
            <SwiperSlide
           key={item.id}>
         <motion.div 
         initial ="offScreen"
         whileInView="onScreen"
         variants={cardAnime}
         className='testimonial'>
         <div className="client_avatar">
            <img src={item.avatar} alt="Avatar one" />
          </div>
          <h5 className='client_name'>{item.name}</h5>
            <small className="client_review">
             {item.review}
            </small>
         </motion.div>
        </SwiperSlide>
       
        ))
      }
    </Swiper>
   </section>
  )
}
