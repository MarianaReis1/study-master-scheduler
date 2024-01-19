"use client";
import { useState } from "react";
import Link from "next/link";

import { Box, Button, Card, CardHeader, CardContent, Container, Stack, Typography } from "@mui/material";
import Loader from "@mytutor/mytutor-design-system/components/Loader";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExamsDate from "./components/ExamsDate";
import Subject from "./components/Subject";
import Grades from "./components/Grades";
import Confidence from "./components/Confidence";
import Completed from "./components/Completed";
import { response } from "./exampleResponse";

async function getData() {
  const res = await fetch("/api/topic");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const initialState = {
  "exam-start-date": "",
  "exam-end-date": "",
  subject: "",
  "exam-board": "",
  level: "",
  "current-grande": "",
  "target-grande": "",
  "confidence-1": "",
  "confidence-2": "",
  "confidence-3": "",
  "confidence-4": "",
};

const steps = [
  { stepName: "EXAMS_DATE", title: "When do have your exams?" },
  { stepName: "SUBJECT", title: "Which subject would you like to revise?" },
  { stepName: "GRADES", title: "Tell us about your grades." },
  {
    stepName: "CONFIDENCE",
    title: "How confident do you feel in these topics?",
  },
  { stepName: "COMPLETED", title: "Well done" },
];


export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();

    console.log(e);
  };

  const getResults = async () => {
    setLoading(true);
    // const data = await getData();
    const data = response;
    setTimeout(() => {
      setResults(data.plan);
      setLoading(false);
    }, 2000);
  };

  const rows = response.plan;

  return (
    <>
      {results ? (
        <main>
          <Typography variant="h3" textAlign={"center"} mb={2}>
            Here is your table
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 396 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Subject</TableCell>
                  <TableCell align="right">Topic</TableCell>
                  <TableCell align="center">Activity ideas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.d}</TableCell>
                    <TableCell align="right">{row.s}</TableCell>
                    <TableCell align="right">{row.t}</TableCell>
                    <TableCell align="right">
                      <Link href="/activity">
                        <Button>Activity ideas</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      ) : (
        <main>
          <Typography variant="h2" mb={4}>
            {steps[selectedStep].title}
          </Typography>
          <form onSubmit={handleSubmit}>
            {selectedStep === 0 && <ExamsDate />}
            {selectedStep === 1 && <Subject />}
            {selectedStep === 2 && <Grades />}
            {selectedStep === 3 && <Confidence />}
            {selectedStep === 4 && <Completed />}
            {selectedStep === steps.length - 1 ? (
              <>
                {loading && (
                  <Stack
                    mt={3}
                    mb={3}
                    direction={"row"}
                    justifyContent={"center"}
                  >
                    <Loader />
                  </Stack>
                )}
                <Button type="submit" fullWidth>
                  {loading ? "Loading" : "Calculate time needed"}
                </Button>
              </>
            ) : (
              <Stack
                direction="row"
                justifyContent="space-between"
                marginTop={10}
              >
                {selectedStep !== 0 ? (
                  <Button onClick={() => setSelectedStep((prev) => prev - 1)}>
                    Return
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button onClick={() => setSelectedStep((prev) => prev + 1)}>
                  Next
                </Button>
              </Stack>
            )}
          </form>
        </main>
      )}
    </>
  );
}
