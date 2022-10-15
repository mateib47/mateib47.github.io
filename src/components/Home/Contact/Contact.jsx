import "./contact.scss";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import Box from '@mui/material/Box'
import { sendContactRequest } from "../../../data";


const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    sendContactRequest(e.target.email.value,e.target.message.value)
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <lord-icon
          src="https://cdn.lordicon.com/kjkiqtxg.json"
          trigger="boomerang"
          style={{ width: "100%", height: "100%" }}
        ></lord-icon>
      </div>
      <div className="right">
        <Typography variant="h4" sx={{ fontWeight: "600", overflow:"hidden" }}>
          Get in touch
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <TextField id="email" label="Email" sx={{width:"80%"}} />
          <TextField id="message" label="Message" multiline rows={8} maxRows={10} sx={{width:"80%"}} />
          <Button type="submit" variant="contained" color="primary" sx={{ px:3, py:1}}>
            Send
          </Button>
          {message && <span>Thank you, I will reply soon!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
