import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "80%",
});

const MyContainer = styled(Container)(({ theme }) => ({
  width: "50%",
  display: "flex",
  backgroundColor: theme.palette.background.default,
  maxHeight: "90%",
  padding: "50px 10px",
}));

const Slide = ({ icon, title, desc, img }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ width: "100vw", backgroundColor: "primary.main" }}
    >
      <Grid
        container
        sx={{
          width: "50%",
          height: "100%",
          margin:'auto',
          backgroundColor: "background.default",
          px:3,
          py:2
        }}
      >
        <Grid
          container
          item
          xs={12}
          md={4}
          alignItems="center"
          justifyContent="flex-start"
          direction="column"
        >
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
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
      </Grid>
    </Container>
  );
};

export default Slide;
