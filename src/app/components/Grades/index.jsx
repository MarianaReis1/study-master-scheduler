import { TextField } from "@mui/material";

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
    </>
  );
}
