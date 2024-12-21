"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { PrimaryTypography } from "../CustomTypography";
import { flexStyle } from "@/styles/commonStyles";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbHomeFilled } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { LuReplaceAll } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import GLoader from "../global/GLoader";
import { useGlobalStore } from "@/store/GlobalStore";
import { Opacity } from "@mui/icons-material";
const drawerWidth = 235;

export default function SideBar({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const { setIsLoading } = useGlobalStore();

  const handleDrawer = () => {
    setOpen(!open);
  };
  const menuArr = [
    {
      title: "Dashboard",
      icon: (
        <TbLayoutDashboardFilled style={{ height: "30px", width: "30px" }} />
      ),
      to: "/",
    },
    {
      title: "Home",
      icon: <TbHomeFilled style={{ height: "30px", width: "30px" }} />,
      to: "/home",
    },
    {
      title: "Works",
      icon: <MdDeveloperMode style={{ height: "30px", width: "30px" }} />,
      to: "/works",
    },
    {
      title: "About",
      icon: <SiHtmlacademy style={{ height: "30px", width: "30px" }} />,
      to: "/about",
    },
    {
      title: "Skills",
      icon: <LuReplaceAll style={{ height: "30px", width: "30px" }} />,
      to: "/skills",
    },
    {
      title: "Testimonials",
      icon: <RiContactsFill style={{ height: "30px", width: "30px" }} />,
      to: "/testimonials",
    },
    {
      title: "Contact",
      icon: <IoIosContact style={{ height: "30px", width: "30px" }} />,
      to: "/contact",
    },
  ];
  const [isHover, setisHover] = React.useState(
    menuArr.map((elem) => ({ state: false }))
  );
  const handleToggle = (index: number) => {
    const tempArr = [...isHover];
    tempArr[index].state = !tempArr[index].state;
    setisHover(tempArr);
  };
  const pathname: any = usePathname();
  const currentPath = pathname.split("/")[2]
    ? "/" + pathname.split("/")[2]
    : "/";
  const handleClick = (id: string, to: string) => {
    if (currentPath != to) {
      setIsLoading(true);
    }
    router.push("/dashboard" + to);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <GLoader />
      <Box
        sx={{
          ...flexStyle(),
          background: "var(--background)",
          height: "100vh",
          padding: 5,
          width: "100%",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            ...flexStyle(),
            width: "max-content",
          }}
        >
          <Box
            sx={{
              height: "90%",
              width: open ? 250 : 78,
              background: "var(--cardBg)",
              borderRadius: 8,
              transition: ".5s",
              ...flexStyle("column", 5),
              padding: 2,
              position: "relative",
            }}
          >
            <Box
              sx={{
                padding: 3,
                width: "100%",
                ...flexStyle(),
                position: "relative",
              }}
            >
              <PrimaryTypography
                name={"Jers-folio"}
                sx={{
                  opacity: open ? 1 : 0,
                  transition: !open ? ".2s" : "2s",
                  position: "absolute",
                }}
              />

              <Box
                component={"img"}
                sx={{
                  height: "40px",
                  width: "40px",
                  opacity: !open ? 1 : 0,
                  transition: ".3s",
                  position: "absolute",
                }}
                src="/favicon-48x48.png"
              />
            </Box>

            <IconButton
              onClick={handleDrawer}
              sx={{
                position: "absolute",
                right: -10,
                background: "var(--teritary)",
                color: "var(--icon)",
                height: "20px",
                width: "20px",
                zIndex: 10,
                transition: ".5s",
                transform: open ? "translateY(-250px)" : "none",
              }}
              size="small"
            >
              <ChevronRightIcon
                sx={{
                  rotate: open ? "180deg" : "0deg",
                  transition: ".3s",
                }}
              />
            </IconButton>
            <List
              sx={{
                height: "100%",
                ...flexStyle("column", 4, "", "space-between"),
                width: "100%",
              }}
            >
              {menuArr.map((elem, index) => {
                const isSelected =
                  isHover[index].state || currentPath == elem.to;
                return (
                  <ListItem
                    onClick={() => {
                      handleClick(elem.title, elem.to);
                    }}
                    key={index}
                    disablePadding
                    onMouseEnter={() => {
                      handleToggle(index);
                    }}
                    onMouseLeave={() => {
                      handleToggle(index);
                    }}
                    sx={{
                      position: "relative",
                      ...flexStyle(),
                      background:
                        !open && isSelected ? "var(--primary)" : "transparent",
                      borderRadius: "30%",
                      transition: ".3s",
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/svgs/activeMenu.svg"
                      sx={{
                        position: "absolute",
                        right: -30,
                        opacity: isSelected && open ? 1 : 0,
                        transition: ".4s",
                      }}
                    />

                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          transform:
                            isSelected && open
                              ? "rotate3d(1, 1, 1, 2deg)"
                              : "none",
                          transition: ".3s",
                          marginLeft: isSelected && open ? 5 : 0,
                          ...flexStyle(),
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
                            justifyContent: "center",
                            color: isSelected
                              ? "var(--text)"
                              : "var(--disabled)",
                          },
                        ]}
                      >
                        {elem.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={elem.title}
                        sx={[
                          open
                            ? {
                                opacity: 1,
                              }
                            : {
                                opacity: 0,
                              },
                          {
                            "& .MuiTypography-root": {
                              fontFamily: "Sora-medium",
                            },
                            color: isSelected
                              ? "var(--text)"
                              : "var(--disabled)",
                            transition: !open ? ".2s" : "2s",
                          },
                        ]}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            background: "var(--background)",
            height: "85vh",
            overflowY: "auto",
            paddingX: 10,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
