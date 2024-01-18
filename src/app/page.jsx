"use client";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

async function getData() {
  const res = await fetch("/api");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const getResults = async () => {
    setLoading(true);
    const data = await getData();

    setResults(data.text);
    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-[80%]">


      
      <Button onClick={getResults}>Get Data</Button>
      {loading ? <Typography>Loading...</Typography> : results && results}
    </main>
  );
}
