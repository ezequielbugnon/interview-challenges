import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import people from '../assets/people.svg';
import './style.css';
import { useEffect } from "react";

type PresentationProps = {
  dark: 'dark' | 'light'
}
//created type for presentation props

const Presentation = (props: PresentationProps) => {
  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    if (props.dark==='dark') {
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
  }, [props.dark]);
  //this useEffect changes color for html and body depending on the dark prop, it was needed as the background color was not changing when the dark prop was changing

  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: props.dark === 'dark' ? "black" : "white", color: props.dark === 'dark' ? "white" : "black"}}
      display="flex"
    >
      {/*changing the text color and background color for the home screen depending on the dark prop*/}
      <div>
      <Typography variant="h3" component="h2" paddingTop={5} paddingBottom={4}>
        Welcome to Interview Challenges Project 
      </Typography>
      <Typography variant="h6" component="h2" paddingBottom={3} >
        This Project is for the people who are interested in approving the job
        interview challenges especially those junior developers. Here you will
        find tests similar to those carried out by companies.
      </Typography>
      <a target="_blank" href={"https://github.com/ezequielbugnon/interview-challenges"} style={{textDecoration: "none"}}>
        <Button variant="contained" size="large" style={{marginBottom: "40px"}}>
          Collaborate
        </Button>
      </a>
      </div>
    
      <img src={people} alt="people" className="people-svg"/>
    </Box>
  );
};

export default Presentation;
