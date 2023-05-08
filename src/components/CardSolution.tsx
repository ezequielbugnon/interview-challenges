import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Solution } from "../models/challenge";
import './style.css'
import { useEffect } from "react";

interface CardSolutionProps {
  solution: Solution,
  dark: 'dark' | 'light' //added the dark type prop to the CardSolutionProps interface
}



const CardSolution: React.FC<CardSolutionProps> = ({ solution, dark }) => {
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
  }, [dark]);
//this useEffect will run when the dark prop changes and change the background color accordingly

  return (
      <Card sx={{ minWidth: 200, backgroundColor: dark==='dark'?'black':'white', border: `2px solid ${dark === 'dark' ? 'white' : 'black'}`}}>
        {/*Changing the color of the card and added a border as the card was not visible in dark mode */}
        <CardContent>
          <Typography sx={{ fontSize: 18, color: dark==='dark'?'white':'black' }} color="text.primary" gutterBottom>
            Author: {solution.author} {/*Changing the color of the text accordingly */}
          </Typography>
          <Typography sx={{ mb: 1.5, color: dark==='dark'?'white':'black' }} color="text.secondary">
            Stack: {solution.technologies} {/*Changing the color of the text accordingly */}
          </Typography>
        </CardContent>
        <CardActions>
          <a
            target="_blank"
            href={solution.url}
            style={{ textDecoration: "none" }}
          >
            <Button size="small">See More</Button>
          </a>
        </CardActions>
      </Card>
  );
};

export default CardSolution;
