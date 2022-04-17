import './testimonials.scss'
import {
  testimonialsList} from "../../data";

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsList.map(p =>(
          <div className={p.featured ? "card featured" : "card"} key={p.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={p.img} className="user" alt="" />
              <img src={p.icon} className="right" alt="" />
            </div>
          <div className="center">{p.desc}</div>
          <div className="bottom">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonials