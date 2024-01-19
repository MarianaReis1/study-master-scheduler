"use client";
import { useState } from "react";

import { Box, Button, Container, Loader, Stack, Typography } from "@mui/material";
import ExamsDate from "./components/ExamsDate";
import Subject from "./components/Subject";
import Grades from "./components/Grades";
import Confidence from "./components/Confidence";
import Completed from "./components/Completed";

async function getData() {
  const res = await fetch("/api");

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
    const data = await getData();

    setResults(data.text);
    setLoading(false);
  };

  return (
    <Container component="main">
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
            <Button type="submit" fullWidth>
              {loading ? "Loading" : "Calculate time needed"}
            </Button>
            {loading && <Loader />}
          </>
          )
         : (
          <Stack direction="row" justifyContent="space-between" marginTop={10}>
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

      {results && <Box>{results}</Box>}
    </Container>
  );
}
