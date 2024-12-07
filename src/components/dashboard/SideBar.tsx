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
const drawerWidth = 235;

export default function SideBar({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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
    <>
      <GLoader />
      <Box
        sx={{
          ...flexStyle("", 1, "", "flex-end"),
          background: "var(--background)",
          minHeight: "100vh",
          padding: 5,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            height: "90%",
            width: open ? 250 : 78,
            background: "var(--cardBg)",
            borderRadius: 8,
            transition: ".3s",
            ...flexStyle("column", 5),
            position: "fixed",
            padding: 2,
            top: 40,
            left: 70,
          }}
        >
          {open ? (
            <PrimaryTypography name={"Jers-folio"} />
          ) : (
            <Box
              component={"img"}
              sx={{ height: "40px", width: "40px" }}
              src="/favicon-48x48.png"
            />
          )}
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
          <List
            sx={{
              height: "100%",
              ...flexStyle("column", 4, "", "space-between"),
              width: "100%",
            }}
          >
            {menuArr.map((elem, index) => {
              const isSelected = isHover[index].state || currentPath == elem.to;
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
                      transition: ".3s",
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
                          color: isSelected ? "var(--text)" : "var(--disabled)",
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
                          color: isSelected ? "var(--text)" : "var(--disabled)",
                        },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          sx={{
            width: open ? 250 : 78,
            transition: ".3s",
          }}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: "0px  100px",
            background: "var(--background)",
            minHeight: "85vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
