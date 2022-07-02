import {portfolios as data } from "../data"
export const Potfolio = () => {
  return (
    <section id="potfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(item=>(
          <article key={item.id} className="portfolio_items">
          <div className="portfolio_item_image">
            <img src={item.image} alt="" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio_item_cta">
          <a href={item.github} target="blank" className="btn">Github</a>
            <a href={item.live} className="btn btn-primary" target="blank">Live Demo</a>
          </div>
        </article>
        ))
      }
     
    </div>
    </section>
  )
}
