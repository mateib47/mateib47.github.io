import "./contact.scss";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
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
        <Typography variant="h2" sx={{ fontWeight: "600" }}>
          Get in touch
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <TextField label="Email" />
          <TextField label="Message" multiline rows={8} maxRows={10} />
          <button type="submit">Send</button>
          {message && <span>Thank you, I will reply soon!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
