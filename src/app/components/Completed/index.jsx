import { Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function Completed() {
  return (
    <>
      <Typography sx={{ marginBottom: "16px" }}>
        You&apos;ve added your first revision subject!
      </Typography>

      <Stack alignItems={"center"} mt={2} mb={2}>
        <Image
          src={`/illustration5.png`}
          alt="MyTutor"
          width={350}
          height={50}
        />
      </Stack>
    </>
  );
}
