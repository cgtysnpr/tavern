import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

import Image from "next/image";
import IndexLayout from "../layouts/IndexLayout";
import type { ReactElement } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/page");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/images/tavern3.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
            mb: 6,
          }}
        >
          <Box>
            <Typography
              color="primary.light"
              sx={{
                filter: "drop-shadow(0 25px 25px rgb(0 0 0/0.15))",
                textAlign: "center",
              }}
              variant="h1"
              component="h1"
            >
              welcome to{" "}
              <Typography color="primary.main" variant="h1" component="span">
                {" "}
                The Tavern
              </Typography>
              .{" "}
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              color="primary.light"
              variant="h6"
              component="h6"
            >
              Build BREWERYs, brew MEAD, then relax!
            </Typography>
          </Box>

          <Button
            onClick={(e) => handleClick(e)}
            sx={{
              p: 2,
              borderRadius: "1rem",
              transition: "0.3s",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "fontWeightBold",
              border: "1px solid",
              borderColor: "primary.dark",
              color: "primary.light",
              mb: 16,
              "&:hover": {
                border: "1px solid",
                borderColor: "primary.main",
              },
            }}
            variant="contained"
          >
            Click here to become a BREWER
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: { xs: "unset", md: "unset", lg: 3 },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "fontWeightMedium" }}
              component="h5"
              color="primary.light"
            >
              Built on Avalanche
            </Typography>
            <Image
              src="/images/avalanche-avax-logo.webp"
              alt="logo"
              width="40px"
              height="40px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <IndexLayout>{page}</IndexLayout>;
};
