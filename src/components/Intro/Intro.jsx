import './intro.scss'

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile1.png" alt="" />
        </div>
      </div>  
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Matei Bucur</h1>
          <h3>UT Student<span></span></h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />  
        </a>
      </div>
    </div>
  )
}

export default Intro