import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TabsApp from "./TabsApp";
import { Challenge } from "../models/challenge";
import Presentation from "./Presentation";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  challenges: Challenge[];
}

const DrawerApp: React.FC<Props> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const initalState:Challenge = {
    id: 0,
    title: "",
    goals: "",
    steps: [],
    Comments: "",
    solutions: []
  }

  const [stateChallenge, setStateChallenge] = React.useState<Challenge>(initalState);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#1E2859", height: "100%", color: "white" }}>
      <Button
            variant="text"
            onClick={() => setStateChallenge(initalState)}
            style={{ color: "white" }}
            size="small"
          >   
        <Typography variant="h7" noWrap component="div" align="center" sx={{"margin": "11px", "fontSize": "16.9px", "fontWeight": "bold", "height": "33.5px"}}>
                INTERVIEW CHALLENGES
        </Typography>
      </Button>
      <Divider style={{ backgroundColor: "white" }} />
      <List>
        <ListItem>
          <ListItemText primary={"LIST OF CHALLENGES"} />
        </ListItem>
        {props.challenges.map((challenge, index) => (
          <ListItem key={challenge.id} disablePadding>
            <ListItemButton onClick={() => setStateChallenge(challenge)}>
              <ListItemIcon style={{ color: "white" }}>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={challenge.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ backgroundColor: "#1E2859" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {stateChallenge.id !== 0 ? (
          <TabsApp challenge={stateChallenge} />
        ) : (
          <Presentation/>
        )}
      </Box>
    </Box>
  );
};

export default DrawerApp;
