import Image from "next/image";
import { Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ExamsDate() {
  return (
    <Stack mb={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
        <DatePicker
          label="Start date"
          name="exam-start-date"
          sx={{ marginBottom: "16px" }}
        />
        <DatePicker
          label="End date"
          name="exam-start-end"
          sx={{ marginBottom: "16px" }}
        />
      </LocalizationProvider>

      <Stack alignItems={"center"} mt={2} mb={2}>
        <Image
          src={`/illustration1.png`}
          alt="MyTutor"
          width={350}
          height={50}
        />
      </Stack>
    </Stack>
  );
}
