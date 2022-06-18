import { Box, AppBar, Stack, Container, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const SecondHeader = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          top:0,
          height: 84,
          backgroundColor: "rgb(64 64 64/.5)",
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
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2.3}
                sx={{ pl: { xs: "unset", md: "unset", lg: 10 } }}
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
                    borderColor: "info.main",
                    color: "info.light",
                    "&:hover": {
                      border: "1px solid",
                      borderColor: "info.main",
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
