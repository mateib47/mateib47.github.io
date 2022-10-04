import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography'



const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "90%",
  marginTop: "20px",
});

const MyGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "90%",
  height: "100%",
  margin: "auto",
  padding: "10px 30px",
  borderRadius: "10px",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));

const Slide = ({ icon, title, desc, img }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ width: "100vw", backgroundColor: "primary.main" }}
    >
      <MyGrid container sx={{ boxShadow: 2 }}>
        <Grid
          container
          item
          xs={12}
          md={4}
          alignItems="center"
          justifyContent="flex-start"
          direction="column"
        >
          <div style={{width:"100%"}}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{desc}</Typography>
          </div>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={8}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Img src={img} alt="" />
        </Grid>
      </MyGrid>
    </Container>
  );
};

export default Slide;
