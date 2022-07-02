import  Cta  from "./Cta.js"
import me from '../assets/me.png'
import { HeaderSocials } from "./HeaderSocials.js"

export const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>
          Hello I'm
        </h5>
        <h1>Prince Chimaobi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={me}  alt="" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
      
    </header>
  )
}
