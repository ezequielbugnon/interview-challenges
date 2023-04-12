import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Solution } from "../models/challenge";

interface CardSolutionProps {
  solution: Solution;
}

const CardSolution: React.FC<CardSolutionProps> = ({ solution }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Author: {solution.author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Stack: {solution.technologies}
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
