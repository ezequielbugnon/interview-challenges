import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Challenge } from "../models/challenge";
import ContainerGrid from "./ContainerGrid";
import {useEffect} from 'react'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabsAppProps {
  challenge: Challenge;
  dark: 'dark' | 'light'; //added dark mode
}

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabsApp: React.FC<TabsAppProps> = ({ challenge, dark }) => {
 

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
  }, [dark, value]);

  //here useEffect depends on value too as on switching from Solution tab to back to Challenge tab the color for body background was not updating. The reason was that the component was not unmounting and hence useEffect was not called. So I added value as dependency to useEffect and it worked.
  

  return (
    <Box sx={{ width: "100%"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Challenge" {...a11yProps(0)} sx={{backgroundColor: dark==='dark'?'black':'white', color: dark==='dark'?'white':'black'}}/>
          <Tab label="Solutions" {...a11yProps(1)} sx={{backgroundColor: dark==='dark'?'black':'white', color: dark==='dark'?'white':'black'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h3" component="h2" paddingBottom={4} sx={{backgroundColor: dark==='dark'?'black':'white', color: dark==='dark'?'white':'black'}}>
          {challenge.title}
        </Typography>
          <Typography variant="h5" component="h2" paddingBottom={3} sx={{backgroundColor: dark==='dark'?'black':'white', color: dark==='dark'?'white':'black'}}>
            {challenge.goals}
          </Typography >
          {challenge.steps.map((step, k) => (
            <Typography key={k} variant="body1" component="h2" paddingBottom={2} sx={{backgroundColor: dark==='dark'?'black':'white', color: dark==='dark'?'white':'black'}}>
              {step.step}
            </Typography>
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContainerGrid challenge={challenge} dark={dark}/>
      </TabPanel>
    </Box>
  );
};

export default TabsApp;
