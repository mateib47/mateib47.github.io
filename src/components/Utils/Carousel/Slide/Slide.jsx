import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";


const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

const Slide = ({icon, title, desc, img}) => {
  return (
    <Container maxWidth="xl"  sx={{width:'100vw',backgroundColor:'primary.main' }}>
      <Container sx={{width:'50%', display:'flex', backgroundColor:'background.default', maxHeight:"100%", padding:"50px 10px"}}>
        <Box sx={{flex:1}}>
          <div className="leftContainer">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </Box>
        <Box sx={{flex:1}}>
          <Img src={img} alt="" />
        </Box>
      </Container>
    </Container>
  );
};

export default Slide;
