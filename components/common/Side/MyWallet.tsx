import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const walletData = [
  {
    image: "/images/side/image-1.png",
    value: 0,
    plus: true,
  },
  {
    image: "/images/side/image-2.png",
    value: 0,
    plus: true,
  },
  {
    image: "/images/side/image-3.png",
    value: 0,
  },
  {
    image: "/images/side/image-4.png",
    value: 0,
  },
];
const MyWallet = () => {
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
        My Wallet
      </Typography>
      <Stack alignItems="center" spacing={1}>
        {walletData.map((data, i) => (
          <Box
            key={`myWallet${i}`}
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              background:
                "linear-gradient(to bottom,rgb(28 25 23/0.95),rgb(41 37 36/0.95),rgb(28 25 23/0.7))",
              p: 2,
              borderRadius: "1.5rem",
              boxShadow: 2,
              justifyContent: "flex-start",
              border: "1px solid rgb(68 64 60)",

            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                ...(!data.plus && {
                  width: "53%",
                }),
              }}
            >
              <Image
                src={data.image}
                alt={`image-${i}`}
                width="24px"
                height="24px"
              />
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
              {data.plus ? (
                <FontAwesomeIcon className="icon-3" icon={faCirclePlus} />
              ) : null}
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
};
export default MyWallet;
