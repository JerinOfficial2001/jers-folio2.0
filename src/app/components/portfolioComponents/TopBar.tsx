import { Box, Divider, IconButton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  HeaderTypography,
  PrimaryTypography,
  SecondaryTypography,
} from "../CustomTypography";
import { flexStyle } from "@/app/styles/commonStyles";
import { usePathname, useRouter } from "next/navigation";
import GButton from "../global/GButton";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { Link, animateScroll as scroll } from "react-scroll";
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";
import { MenuOutlined } from "@mui/icons-material";
import ResponsiveNavItems from "./ResponsiveNavItems";
import { useFolioData } from "@/app/hooks/useFolioData";

type Props = {};

export default function TopBar({}: Props) {
  const router = useRouter();
  const lists = [
    {
      lable: "Home",
      to: "home",
      offset: -100,
    },
    {
      lable: "Works",
      to: "works",
      offset: 10,
    },
    {
      lable: "About",
      to: "about",
      offset: 10,
    },
    {
      lable: "Skills",
      to: "skills",
      offset: 10,
    },
    {
      lable: "Testimonials",
      to: "testimonials",
      offset: 10,
    },
    {
      lable: "Contact",
      to: "contact",
      offset: 10,
    },
  ];
  const [activeMenu, setActiveMenu] = useState("");

  // const handleHashChange = () => {
  //   const hash = window.location.hash;
  //   setActiveMenu(hash);
  // };

  // useEffect(() => {
  //   handleHashChange();
  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);
  const { isScrolled } = useGlobalStore();
  const pathname = usePathname();
  const { isxs, issm } = useMuiBreakpoints();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { folioData } = useFolioData();
  return (
    <Box
      sx={{
        width: "100%",
        background: isScrolled ? "var(--secondaryBg)" : "transparent",
        height: { md: "100px", sm: "80px", xs: "70px" },
        ...flexStyle("", "", "", "space-between"),
        transition: "1s",
        boxShadow: isScrolled ? "0 0 30px var(--boxShadow)" : "unset",
        position: isScrolled ? "fixed" : "relative",
        zIndex: 1000,
      }}
    >
      <Box sx={{ ...flexStyle(), marginLeft: { lg: 10, md: 3, sm: 1, xs: 1 } }}>
        <HeaderTypography name={"@"} />
        <SecondaryTypography variant="secondary" name={folioData?.email} />
      </Box>
      {(isxs || issm) && (
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          size="large"
        >
          <MenuOutlined fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      )}
      <ResponsiveNavItems
        lists={lists}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        isResponsive={isxs || issm}
      />
    </Box>
  );
}
