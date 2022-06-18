import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeerMugEmpty,
  faDollarSign,
  faMoneyBill,
  faBox,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
const statData = [
  {
    icon: <FontAwesomeIcon className="icon-4" icon={faBeerMugEmpty} />,
    title: "Total Brewerys",
    value: 0,
  },
  {
    icon: <FontAwesomeIcon className="icon-4" icon={faDollarSign} />,
    title: "Price",
    value: "$0",
  },
  {
    icon: <FontAwesomeIcon className="icon-4" icon={faMoneyBill} />,
    title: "Market Cap",
    value: "$0",
  },
  {
    icon: <FontAwesomeIcon className="icon-4" icon={faBox} />,
    title: "Treasury Reserve",
    value: "$0",
  },
  {
    icon: <FontAwesomeIcon className="icon-4" icon={faSackDollar} />,
    title: "USDC Liquidity",
    value: "$0",
  },
];
const TavernStats = () => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "fontWeightBold",
          textAlign: "center",
          mb: 2,
          mt: 2,
        }}
        color="primary.light"
        variant="h5"
        component="h5"
      >
        Tavern Stats
      </Typography>
      <Stack alignItems="flex-start" spacing={2}>
        {statData.map((data, i) => (
          <Box
            key={`statData${i}`}
            sx={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography color="primary.light" variant="h2" component="h2">
                {data.icon}
              </Typography>
              <Typography
                color="primary.light"
                variant="subtitle1"
                component="span"
              >
                {data.title}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "fontWeightBold",
                textAlign: "center",
              }}
              color="primary.light"
              variant="h5"
              component="h5"
            >
              {data.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};
export default TavernStats;
