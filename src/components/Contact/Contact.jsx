import './contact.scss'
import { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="https://www.insidehighered.com/sites/default/server_files/media/barber%20handshake.jpg" alt="" />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you, I will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact