import { Typography, Box } from "@mui/material";
import Image from "next/image";
const Brewerys = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          background:
            "linear-gradient(to bottom,rgb(28 25 23/0.95),rgb(41 37 36/0.95),rgb(28 25 23/0.7))",
          p: 3,
          borderRadius: "1.5rem",
          boxShadow: 2,
          border: "1px solid rgb(68 64 60)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/brewery.png"
            alt={"brewery"}
            width="112px"
            height="112px"
          />
        </Box>
        <Typography
          color="primary.light"
          sx={{ textAlign: "center", fontWeight: "fontWeightBold" }}
          component="p"
        >
          You own
        </Typography>
        <Typography
          color="rgb(249 115 22)"
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "fontWeightBold",
          }}
          variant="body2"
          component="p"
        >
          0
        </Typography>
        <Typography
          color="primary.light"
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "fontWeightBold",
          }}
          component="p"
        >
          BREWERYs
        </Typography>
        <Typography
          color="primary.light"
          sx={{
            textAlign: "center",
            mt: 5,
            fontWeight: "fontWeightBold",
          }}
          component="p"
        >
          producing
        </Typography>
        <Typography
          color="rgb(249 115 22)"
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "fontWeightBold",
          }}
          variant="body2"
          component="p"
        >
          0.000000 MEAD/day
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          p: 1,
          mt: 1,
          background:
            "linear-gradient(to bottom,rgb(28 25 23/0.95),rgb(41 37 36/0.95),rgb(28 25 23/0.7))",
          borderRadius: "1.5rem",
          boxShadow: 2,
          border: "1px solid rgb(68 64 60)",
        }}
      >
        <Typography
          color="primary.light"
          sx={{
            textAlign: "center",
            fontWeight: "fontWeightBold",
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
          component="p"
        >
          You are earning <Typography color="rgb(249 115 22)">$0</Typography>{" "}
          per day
        </Typography>
      </Box>
    </>
  );
};
export default Brewerys;
