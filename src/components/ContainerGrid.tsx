import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardSolution from "./CardSolution";
import { Challenge } from "../models/challenge";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface ContainerGridProps {
  challenge: Challenge,
  dark: 'dark' | 'light'
}

const ContainerGrid: React.FC<ContainerGridProps> = ({ challenge, dark }) => {
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
      if (dark==='dark') {
        htmlElement.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'black';
      } else {
        htmlElement.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'white';
      }

      return () => {
        htmlElement.style.backgroundColor = '';
        document.body.style.backgroundColor = '';
      };
  }, [dark, challenge]);
  //here useEffect depends on value too as on switching from Solution tab to back to Challenge tab the color for body background was not updating. The reason was that the component was not unmounting and hence useEffect was not called. So I added challenge as dependency to useEffect and it worked.

  return (
    <Box sx={{ flexGrow: 1 }}>
      {challenge.solutions.length === 0 ? (
        <>
         <Typography
          variant="h3"
          component="h2"
          paddingTop={5}
          paddingBottom={4}
          sx={{ color: dark === "dark" ? "white" : "black", backgroundColor: dark === "dark" ? "black" : "white" }}
        >
          You don't have any solutions yet, please add one. 
        </Typography>
           <a target="_blank" href={"https://github.com/ezequielbugnon/interview-challenges"} style={{textDecoration: "none"}}>
          <Button variant="contained" size="large">
            Collaborate
          </Button>
          </a>
        </>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {challenge.solutions.map((solution, k) => (
              <CardSolution key={k} solution={solution} dark={dark} />
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ContainerGrid;
