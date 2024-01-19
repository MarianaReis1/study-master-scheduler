"use client";
import { useState, useEffect } from "react";

import { Card, CardHeader, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import Loader from "@mytutor/mytutor-design-system/components/Loader";
import { get } from "https";

const exampleActivities = {
    "activities": [
        "Create flashcards for arithmetic, geometric, and quadratic sequences terminology.",
        "Complete online quizzes on recognizing different types of sequences.",
        "Write and solve five real-life problems involving arithmetic and geometric sequences."
    ]
}

async function getData(activity) {
    const res = await fetch(`/api/topic?topic=${activity}`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
}

const Activities = ({ activities }) => {
    return activities.map((activity, i) => (
        <Card key={activity}>
            <Stack direction="row" alignItems="center">
                <Stack>
                    <CardHeader title={`Activity idea ${i + 1}`} />
                    <CardContent>{activity}</CardContent>
                </Stack>
                <CardContent><Checkbox /></CardContent>
            </Stack>
        </Card>))
  }

export default function ActivityPage({ searchParams }) {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const topic = searchParams.topic;
  
    const getActivities = async () => {
      setLoading(true);
      const data = await getData(topic);
      console.log(JSON.parse(data.text));
      setResults(JSON.parse(data.text));
      setLoading(false);
    };

    useEffect(() => {
        getActivities();
    }, [])

    return (
        <Stack spacing={3} alignItems="center">
            {loading ? (<Loader />) : (<>
                <Typography variant="h1">Today's activities</Typography>
                <Activities activities={results.activities}/>
            </>)}
        </Stack> 
    )
}
