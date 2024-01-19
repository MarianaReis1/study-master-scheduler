import * as React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Rating } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Image from "next/image";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function Confidence() {
  return (
    <>
      <Stack spacing={1} mb={2}>
        <Typography component="legend">Mathematical fluency</Typography>
        <StyledRating
          name="test"
          defaultValue={2}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Stack>
      <Stack spacing={1} mb={2}>
        <Typography component="legend">Problem Solving</Typography>
        <StyledRating
          name="test-2"
          defaultValue={3}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Stack>
      <Stack spacing={1} mb={2}>
        <Typography component="legend">Using Mathematical Notation</Typography>
        <StyledRating
          name="test-3"
          defaultValue={4}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Stack>
      <Stack spacing={1} mb={2}>
        <Typography component="legend">Exam Technique</Typography>
        <StyledRating
          name="test-4"
          defaultValue={1}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />
      </Stack>

      <Stack alignItems={"center"} mt={2} mb={2}>
        <Image
          src={`/illustration4.png`}
          alt="MyTutor"
          width={350}
          height={50}
        />
      </Stack>
    </>
  );
}
