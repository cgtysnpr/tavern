import { Box, Stack, Typography, Container } from "@mui/material";
import Brewery from "./Brewery";
import Homekits from "./Homekits";
import { useState } from "react";
const Purchase = () => {
  const [tab, setTab] = useState("brewery");
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "100%",
          height: "auto",
          background:
            "linear-gradient(to bottom,rgb(28 25 23/0.95),rgb(41 37 36/0.95),rgb(28 25 23/0.7))",
          p: 2,
          borderRadius: "1.5rem",
          boxShadow: 2,
          border: "1px solid rgb(68 64 60)",
          mt: 4,
          px: 8,
        }}
      >
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={10}
          sx={{ mt: 2, borderBottom: "1px solid #fed7aa" }}
        >
          <Box
            onClick={() => setTab("brewery")}
            sx={{
              cursor: "pointer",
              pb: 1,
              "&:hover": {
                borderBottom: "1px solid",
                borderColor: "secondary.main",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: ".8rem",
                p: 1.5,
                ...(tab === "brewery" && {
                  backgroundColor: "rgb(254 215 170)",
                }),

                "&:hover": {
                  backgroundColor: "rgb(253 186 116)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "fontWeightBold",
                  textAlign: "center",
                }}
                color={tab === "brewery" ? "rgb(28 25 23)" : "primary.light"}
                variant="h5"
                component="h5"
              >
                BREWERYs
              </Typography>
            </Box>
          </Box>
          <Box
            onClick={() => setTab("homekit")}
            sx={{
              cursor: "pointer",
              pb: 1,
              "&:hover": {
                borderBottom: "1px solid",
                borderColor: "secondary.main",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: ".8rem",
                p: 1.5,
                ...(tab === "homekit" && {
                  backgroundColor: "rgb(254 215 170)",
                }),
                "&:hover": {
                  backgroundColor: "rgb(253 186 116)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "fontWeightBold",
                  textAlign: "center",
                }}
                color={tab === "homekit" ? "rgb(28 25 23)" : "primary.light"}
                variant="h5"
                component="h5"
              >
                HOMEKITs
              </Typography>
            </Box>
          </Box>
        </Stack>
        {tab === "brewery" ? <Brewery /> : <Homekits />}
      </Box>
    </Container>
  );
};
export default Purchase;
