import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { PrimaryTypography } from "../CustomTypography";
import { flexStyle } from "@/app/styles/commonStyles";

const drawerWidth = 235;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "transparent",
  color: "var(--text)",
  height: "85%",
  top: "unset",
  ...flexStyle("column", "", "flex-start", ""),
  left: 48,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "transparent",
  color: "var(--text)",
  height: "85%",
  top: "unset",
  ...flexStyle("column", "", "flex-start", ""),
  left: 48,
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  width: "100%",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideBar({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        ...flexStyle(),
        background: "var(--background)",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          position: "absolute",
          height: "90%",
          width: open ? 250 : 78,
          background: "var(--cardBg)",
          borderRadius: 8,
          left: 40,
          transition: ".3s",
          ...flexStyle(),
        }}
      >
        <IconButton
          onClick={handleDrawer}
          sx={{
            position: "absolute",
            right: -10,
            background: "var(--teritary)",
            color: "var(--icon)",
            height: "20px",
            width: "20px",
            zIndex: 10000,
            top: open ? 50 : "unset",
            transition: ".3s",
          }}
          size="small"
        >
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <PrimaryTypography name={"Jers-folio"} />
        </DrawerHeader>

        <Divider />
        <List
          sx={{
            height: "100%",
            ...flexStyle("column", "", "", "space-between"),
            width: "100%",
          }}
        >
          {[
            "Dashboard",
            "Home",
            "Works",
            "About",
            "Skills",
            "Testimonials",
            "Contact",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                    {
                      "& .MuiTypography-root": { fontFamily: "Sora-medium" },
                    },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: "100px", background: "var(--background)" }}
      >
        {children}
      </Box>
    </Box>
  );
}
