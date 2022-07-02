// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { testimonials as data } from '../data'
export const Testimonials = () => {
  return (
   <section id="testimonies">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    className="container testimonials_container">
    
      {
        data.map(item=>(
          <SwiperSlide key={item.id} className="testimonial">
          <div className="client_avatar">
            <img src={item.avatar} alt="Avatar one" />
          </div>
          <h5 className='client_name'>{item.name}</h5>
            <small className="client_review">
             {item.review}
            </small>
        </SwiperSlide>
        ))
      }
    </Swiper>
   </section>
  )
}
