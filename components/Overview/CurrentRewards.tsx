import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";
const DisabledButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "rgb(107 114 128)",
  borderColor: "rgb(107 114 128)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "Gideon Roman",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "rgb(107 114 128)",
    borderColor: "rgb(107 114 128)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgb(107 114 128)",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const ActiveButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "rgb(59 130 246)",
  borderColor: "rgb(59 130 246)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "Gideon Roman",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "rgb(59 130 246)",
    borderColor: "rgb(59 130 246)",
    boxShadow: "none",
    transform: "scale(1.05)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "rgb(107 114 128)",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const CurrentRewards = () => {
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
          <FontAwesomeIcon
            style={{ width: 32, height: 32, color: "rgb(253 186 116)" }}
            icon={faBeerMugEmpty}
          />
        </Box>
        <Typography
          color="primary.light"
          sx={{ textAlign: "center", fontWeight: "fontWeightBold", mt: 2 }}
          component="p"
        >
          Current Rewards
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
          0 MEAD
        </Typography>
        <Typography
          color="primary.light"
          sx={{ textAlign: "center", mt: 2 }}
          component="p"
        >
          Value: ~$0
        </Typography>
        <DisabledButton
          sx={{ width: "100%", mt: 1, borderRadius: ".75rem" }}
          variant="contained"
        >
          Claim All
        </DisabledButton>
        <ActiveButton
          sx={{ width: "100%", mt: 1, borderRadius: ".75rem" }}
          variant="contained"
        >
          Compound All
        </ActiveButton>
        <ActiveButton
          sx={{ width: "100%", mt: 1, borderRadius: ".75rem" }}
          variant="contained"
        >
          Convert To Brewerys
        </ActiveButton>
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
          Your Claim Tax: <Typography color="rgb(249 115 22)">0%</Typography>{" "}
        </Typography>
      </Box>
    </>
  );
};
export default CurrentRewards;
