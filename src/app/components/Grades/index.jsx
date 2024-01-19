import Image from "next/image";
import { TextField, Stack } from "@mui/material";

export default function Grades() {
  return (
    <>
      <TextField
        label="Current grande"
        name="current-grade"
        placeholder="5"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />
      <TextField
        label="Target grande"
        name="target-grade"
        placeholder="10"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <Stack alignItems={"center"} mt={2} mb={2}>
        <Image
          src={`/illustration3.png`}
          alt="MyTutor"
          width={350}
          height={30}
        />
      </Stack>
    </>
  );
}
