import { Box, Stack, Typography } from "@mui/material";
const MyBrewer = () => {
  return (
    <>
    <Typography
    sx={{
      fontWeight: "fontWeightBold",
      textAlign:'center',
      mb:1.5,
    }}
    color="primary.light"
    variant="h5"
    component="h5"
  >
    My Brewer
  </Typography>
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
      <Stack alignItems="center" spacing={2} >
        <Box sx={{ display: "flex", gap: 2, }}>
          <Typography
            sx={{
              fontWeight: "fontWeightLight",
            }}
            color="primary.light"
            variant="h5"
            component="h5"
          >
            Class:
          </Typography>
          <Typography
            sx={{
              fontWeight: "fontWeightBold",
            }}
            color="primary.light"
            variant="h5"
            component="h5"
          >
            Novice
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            sx={{
              fontWeight: "fontWeightLight",
            }}
            color="primary.light"
            component="span"
          >
            Reputation:
          </Typography>
          <Typography
            sx={{
              fontWeight: "fontWeightLight",
            }}
            color="primary.light"
            variant="h5"
            component="h5"
          >
            0
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            sx={{
              fontWeight: "fontWeightLight",
            }}
            color="primary.light"
            component="span"
          >
            Tax:
          </Typography>
          <Typography
            sx={{
              fontWeight: "fontWeightLight",
            }}
            color="primary.light"
            variant="h5"
            component="h5"
          >
            0%
          </Typography>
        </Box>
      </Stack>
    </Box>
    </>
  );
};
export default MyBrewer;
