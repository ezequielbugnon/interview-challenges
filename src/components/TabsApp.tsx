import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Challenge } from "../models/challenge";
import ContainerGrid from "./ContainerGrid";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabsAppProps {
  challenge: Challenge;
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
        <Box sx={{ p: 3 }}>
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

const TabsApp: React.FC<TabsAppProps> = ({ challenge }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Challenge" {...a11yProps(0)} />
          <Tab label="Solutions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h3" component="h2" paddingBottom={4}>
          {challenge.title}
        </Typography>
          <Typography variant="h5" component="h2" paddingBottom={3}>
            {challenge.goals}
          </Typography>
          {challenge.steps.map((step, k) => (
            <Typography key={k} variant="body1" component="h2" paddingBottom={2}>
              {step.step}
            </Typography>
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContainerGrid challenge={challenge} />
      </TabPanel>
    </Box>
  );
};

export default TabsApp;
