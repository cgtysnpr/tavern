import { Box, Stack, Typography, TextField , Button} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
const itemValue = [
  {
    title: "Brewery Cost:",
    value: "0 MEAD",
  },
  {
    title: "MEAD",
    value: "0",
  },
  {
    title: "Price",
    value: "$0",
  },
  {
    title: "USDC",
    value: "$0",
  },
  {
    title: "Price x0",
    value: "$0",
  },
  {
    title: "LP",
    value: "0",
  },
];
const NewTextField = styled(TextField)(({ theme }) =>({
  color: "#000",
  backgroundColor: "rgb(255 237 213)",
  [theme.breakpoints.down('md')]: {
    width: '20%',
  },
  [theme.breakpoints.up('md')]: {
    width: '12%',
  },
  borderRadius: 8,
  textAlign: "end",
  "& .MuiInput-underline:after": {
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
})) as typeof TextField;
const Homekits = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "fontWeightBold",
          textAlign: "center",
          mb: 1.5,
          mt: 2,
          textDecoration: "underline",
        }}
        color="primary.light"
        variant="h4"
        component="h4"
      >
        Purchase a Homekit
      </Typography>
      <Typography
        color="primary.light"
        sx={{ textAlign: "center" }}
        component="p"
      >
        A cheaper alternative.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/images/homekits.png"
          alt={"homekit"}
          width="192px"
          height="192px"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          alignItems: "center",
          gap: 2,
        }}
      >
        <FontAwesomeIcon className="icon-1" icon={faCircleMinus} />
        <NewTextField
          InputProps={{ style: { textAlign: "end" } }}
          value={0}
          id="outlined-basic"
          variant="outlined"
        />
        <FontAwesomeIcon className="icon-1" icon={faCirclePlus} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: {xs:'flex-start',md:'flex-start',lg:"flex-end"},
          mt: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {itemValue.map((data, i) => (
          <Box
            key={`homeitemValue${i}`}
            sx={{
              display: "flex",
              gap: 2,
              pr:1,
              flexBasis: "40%",
              textAlign: "center",
            }}
          >
            <Typography
              color="rgb(253 186 116)"
              sx={{ textAlign: "center",  }}
              component="p"
              noWrap
            >
              {" "}
              {data.title}
            </Typography>{" "}
            <Typography
              color="primary.light"
              sx={{ textAlign: "center", }}
              component="p"
              noWrap
            >
              {data.value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        color="primary.light"
        sx={{ textAlign: "center", mt: 4 }}
        component="p"
      >
        Choose payment method:
      </Typography>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        spacing={0}
        sx={{
          mt: 2,
          borderBottom: "1px solid #fed7aa",
          flexWrap: "wrap",
          pb: 2,
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <Typography
            color="rgb(249 115 22)"
            sx={{
              textAlign: "center",
              mt: 4,
              "&:hover": { color: "rgb(251 146 60)" },
            }}
            component="h6"
            variant="h6"
          >
            MEAD
          </Typography>
        </Box>
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap:1 }}>
          <Typography
            color="primary.light"
            sx={{
              textAlign: "center",
              mt: 4,
              "&:hover": { color: "rgb(251 146 60)" },
            }}
            component="h6"
            variant="h6"
          >
            USDC
          </Typography>
          <Chip sx={{ mt: 4 }} label="Discount: 0%" color="warning" />
        </Box>
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap:1 }}>
          <Typography
            color="primary.light"
            sx={{
              textAlign: "center",
              whiteSpace:"normal",
              mt: 4,
              "&:hover": { color: "rgb(251 146 60)" },
            }}
            component="h6"
            variant="h6"
          >
            LP Tokens
          </Typography>
          <Chip sx={{ mt: 4 }} label="Discount: 0%" color="warning" />
        </Box>
      </Stack>
      <Typography
        color="primary.light"
        sx={{ textAlign: "center",mt:4 }}
        component="p"
      >
        Pay using MEAD:
      </Typography>
      <Button sx={{width:'100%',mt:2, borderRadius:".75rem", "&:hover":{
        transform:"scale(1.05)"
      }}} color="success" variant="contained">Buy</Button>
    </>
  );
};
export default Homekits;