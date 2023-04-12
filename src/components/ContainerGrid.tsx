import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardSolution from "./CardSolution";
import { Challenge } from "../models/challenge";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface ContainerGridProps {
  challenge: Challenge;
}

const ContainerGrid: React.FC<ContainerGridProps> = ({ challenge }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {challenge.solutions.length === 0 ? (
        <Typography
          variant="h3"
          component="h2"
          paddingTop={5}
          paddingBottom={4}
        >
          Welcome to Interview Challenges Project
        </Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {challenge.solutions.map((solution, k) => (
              <CardSolution key={k} solution={solution} />
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ContainerGrid;
