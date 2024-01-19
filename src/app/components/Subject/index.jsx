import { useState } from "react";
import Image from "next/image";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

export default function Subject() {
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <>
      <Typography mb={2}>What subject would you like to revise? </Typography>

      <FormControl sx={{ marginBottom: "16px", minWidth: "100%" }}>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value={"Maths"}>Maths</MenuItem>
          <MenuItem value={"English"}>English</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Exam board"
        placeholder="Eg.: AQA"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />
      <TextField
        label="Level"
        placeholder="E.g.: GCSE"
        sx={{ marginBottom: "16px" }}
        fullWidth
      />

      <Stack alignItems={"center"} mt={2} mb={2}>
        <Image
          src={`/illustration2.png`}
          alt="MyTutor"
          width={350}
          height={50}
        />
      </Stack>
    </>
  );
}
