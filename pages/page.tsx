import { Box, Typography, Grid, Container } from "@mui/material";
import SecondLayout from "../layouts/SecondLayout";
import type { ReactElement } from "react";
import Tabs from "../components/common/Tabs";
import Side from "../components/common/Side";
import Purchase from "../components/Purchase";
export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/purchase-image.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Container maxWidth="xl">
          <Grid item container spacing={6} sx={{ mt: 10 }}>
            <Grid item xs={12} md={12} lg={2.5} sx={{ mt: 6 }}>
              <Side />
            </Grid>
            <Grid item xs={12} md={12} lg={8} sx={{ mt: 1 }}>
              <Tabs />
              <Purchase />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <SecondLayout>{page}</SecondLayout>;
};
