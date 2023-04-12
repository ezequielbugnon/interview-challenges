import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Presentation = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" component="h2" paddingTop={5} paddingBottom={4}>
        Welcome to Interview Challenges Project
      </Typography>
      <Typography variant="h5" component="h2" paddingBottom={3}>
        This Project is for the people who are interested in approving the job
        interview challenges especially those junior developers. Here you will
        find tests similar to those carried out by companies.
      </Typography>
      <a target="_blank" href={"https://github.com/ezequielbugnon/interview-challenges"} style={{textDecoration: "none"}}>
        <Button variant="contained" size="large">
          Collaborate
        </Button>
      </a>
    </Box>
  );
};

export default Presentation;
