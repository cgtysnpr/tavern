import { Box, AppBar, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const IndexHeader = () => {
  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          width: "100%",
          height: 76,
          background: "#04030300",
          border: "none",
          boxShadow: "unset",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <Stack direction="row" spacing={2.3} sx={{ pl: 10 }}>
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
        </Box>
      </AppBar>
    </>
  );
};
export default IndexHeader;
