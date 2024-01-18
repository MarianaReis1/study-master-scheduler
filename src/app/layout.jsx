import Image from "next/image";
import { Link, Stack, Typography } from "@mui/material";
import { ThemeRegistry } from "./components/ThemeRegistry/index";
import Colors from "@mytutor/mytutor-design-system/styles/tokens/colors";
import "./styles/globals.css";
import "./styles/fonts.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: Colors.sand[30],
        }}
      >
        <ThemeRegistry>
          <Stack
            component="header"
            direction="row"
            gap={2}
            justifyContent="space-between"
            sx={{
              position: "sticky",
              top: 0,
              width: "100%",
              px: 4,
              py: 2,
              backgroundColor: "secondary.light",
              zIndex: 2,
            }}
          >
            <Link href="/">
              <Image src={`/logo.svg`} alt="MyTutor" width={100} height={36} />
            </Link>
            <Typography>Study Master Scheduler</Typography>
          </Stack>

          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
