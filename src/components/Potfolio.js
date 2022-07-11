import {portfolios as data } from "../data"
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
export const Potfolio = () => {
  return (
    <section id="potfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(item=>(
          <motion.article
          initial="offScreen"
          whileInView="onScreen"
          variants={cardAnime1}
           key={item.id} className="portfolio_items">
          <div className="portfolio_item_image">
            <img src={item.image} alt="" width="100%" height="200px" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio_item_cta">
          <a href={item.github} target="blank" className="btn">Github</a>
            <a href={item.live} className="btn btn-primary" target="blank">Live Demo</a>
          </div>
        </motion.article>
        ))
      }
     
    </div>
    </section>
  )
}
