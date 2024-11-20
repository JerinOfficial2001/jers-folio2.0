import { Box, Divider, Stack } from "@mui/material";
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

type Props = {};

const ListItem = ({
  isSelected,
  lable,
  onClick,
  to,
  offset,
}: {
  isSelected?: boolean;
  lable: string;
  onClick: any;
  to: string;
  offset: number;
}) => {
  const [isHover, setisHover] = useState(false);
  return (
    <Link
      activeClass="link-active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={100}
    >
      <Stack
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={onClick}
        sx={{
          transform: isHover || isSelected ? "translateY(-1px)" : "unset",
          transition: ".3s",
          cursor: "pointer",
          gap: 1,
        }}
      >
        <PrimaryTypography name={lable} size="xs" />

        <Divider
          sx={{
            display:
              isHover || (isSelected && lable == "Works") ? "flex" : "none",
            background: "var(--buttonPrimary)",
            border: "none",
            height: "2px",
            borderRadius: "10px",
            animation: "draw-divider .5s forwards",
            width: "100%",
          }}
        />
      </Stack>
    </Link>
  );
};
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
      offset: 0,
    },
    {
      lable: "About",
      to: "about",
      offset: 0,
    },
    {
      lable: "Skills",
      to: "skills",
      offset: 0,
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

  return (
    <Box
      sx={{
        width: "100%",
        background: isScrolled ? "var(--secondaryBg)" : "transparent",
        height: "100px",
        ...flexStyle("", "", "", "space-between"),
        paddingX: 20,
        transition: "1s",

        boxShadow: isScrolled ? "0 0 30px var(--boxShadow)" : "unset",
        position: isScrolled ? "fixed" : "relative",
        zIndex: 1000,
      }}
    >
      <Box sx={{ ...flexStyle() }}>
        <HeaderTypography name={"@"} />
        <SecondaryTypography variant="secondary" name="jerin@gmail.com" />
      </Box>
      <Box sx={{ ...flexStyle("", 7, "", "") }}>
        {lists.map((elem: any, index: number) => {
          const isSelected =
            activeMenu == elem.id || pathname.split("/")[2] ? true : false;
          return (
            <ListItem
              offset={elem.offset}
              to={elem.to}
              onClick={() => {
                setActiveMenu(elem.to);
                if (elem.to != "works" && pathname.split("/")[2]) {
                  router.push(`/${pathname.split("/")[1]}`);
                }
              }}
              lable={elem.lable}
              isSelected={isSelected}
              key={index}
            />
          );
        })}
        <GButton lable="Hire me!" />
      </Box>
    </Box>
  );
}
