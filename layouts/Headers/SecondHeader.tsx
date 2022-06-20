import { Box, AppBar, Stack, Container, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
const SecondHeader = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          top: 0,
          height: { xs: 94, md: 94, lg: 84 },
          backgroundColor: {
            xs: "rgb(255 237 213)",
            md: "rgb(255 237 213)",
            lg: "rgb(106 95 82)",
          },
          border: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                height: 84,
                justifyContent: {
                  xs: "flex-start",
                  md: "flex-start",
                  lg: "space-between",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "flex", lg: "none" },
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/header-tavern.png"
                  alt={"brewery"}
                  width="68px"
                  height="68px"
                />
              </Box>
              <Stack
                direction="row"
                spacing={2.3}
                sx={{
                  pl: { xs: "unset", md: "unset", lg: 10 },
                  display: { xs: "none", md: "none", lg: "flex" },
                }}
              >
                <Link href="#">
                  <FontAwesomeIcon className="icon-1" icon={faTwitter} />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon className="icon-1" icon={faDiscord} />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon className="icon-1" icon={faMedium} />
                </Link>
                <Link href="#">
                  <FontAwesomeIcon className="icon-2" icon={faBook} />
                </Link>
              </Stack>
              <Stack
                direction="row"
                spacing={2.3}
                sx={{ pl: { xs: "unset", md: "unset", lg: 10 } }}
              >
                <Button
                  sx={{
                    p: 1.3,
                    borderRadius: "1rem",
                    transition: "0.3s",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "fontWeightBold",
                    border: "1px solid",
                    borderColor: "secondary.dark",
                    color: "white",
                    display: { xs: "none", md: "none", lg: "block" },
                    "&:hover": {
                      border: "1px solid",
                      borderColor: "secondary.main",
                    },
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Buy $MEAD
                </Button>
                <Button
                  sx={{
                    p: 1.3,
                    borderRadius: "1rem",
                    transition: "0.3s",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "fontWeightBold",
                    border: "1px solid",
                    borderColor: {
                      xs: "info.light",
                      md: "info.light",
                      lg: "info.main",
                    },
                    color: "info.light",
                    "&:hover": {
                      border: "1px solid",
                      borderColor: {
                        xs: "info.light",
                        md: "info.light",
                        lg: "info.main",
                      },
                      color: "info.main",
                    },
                  }}
                  color="info"
                  variant="contained"
                >
                  Connect
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </AppBar>
    </>
  );
};
export default SecondHeader;
