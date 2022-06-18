import { Typography, Grid, Container } from "@mui/material";
import Brewerys from "./Brewerys";
import Homekits from "./Homekits";
import PendingRewards from "./PendingRewards";
import CurrentRewards from "./CurrentRewards";
const Overview = () => {
  return (
    <>
      <Container maxWidth="md" sx={{mx:{xs:0,md:0,lg:6}, mb:5}}>
        <Typography
          color="primary.light"
          variant="title"
          component="h1"
          sx={{ textAlign: "center", mt: 4 }}
        >
          Overview
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={12} lg={6}>
            <Brewerys />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <PendingRewards />
          </Grid>
        </Grid>
        <Typography
          color="primary.light"
          variant="title"
          component="h1"
          sx={{ textAlign: "center", mt: 4 }}
        >
          Homekits
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={12} lg={6}>
            <Homekits />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <CurrentRewards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Overview;
