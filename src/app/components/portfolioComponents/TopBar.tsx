import { Box, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  HeaderTypography,
  PrimaryTypography,
  SecondaryTypography,
} from "../CustomTypography";
import { flexStyle } from "@/app/styles/commonStyles";
import { useRouter } from "next/navigation";
import GButton from "../global/GButton";
import { useGlobalStore } from "@/app/store/GlobalStore";

type Props = {};

const ListItem = ({
  isSelected,
  lable,
  onClick,
}: {
  isSelected?: boolean;
  lable: string;
  onClick: any;
}) => {
  const [isHover, setisHover] = useState(false);
  return (
    <Stack
      onClick={onClick}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      sx={{
        transform: isHover || isSelected ? "translateY(-1px)" : "unset",
        transition: ".3s",
        cursor: "pointer",
        gap: 1,
      }}
    >
      <PrimaryTypography name={lable} />

      {(isSelected || isHover) && (
        <Divider
          sx={{
            background: "var(--buttonPrimary)",
            border: "none",
            height: "2px",
            borderRadius: "10px",
            animation: "draw-divider .5s forwards",
            width: "100%",
          }}
        />
      )}
    </Stack>
  );
};
export default function TopBar({}: Props) {
  const router = useRouter();
  const lists = [
    {
      lable: "Home",
      id: "#home",
    },
    {
      lable: "Works",
      id: "#works",
    },
    {
      lable: "About",
      id: "#About",
    },
    {
      lable: "Skills",
      id: "#skills",
    },
    {
      lable: "Testimonials",
      id: "#testimonials",
    },
    {
      lable: "Contact",
      id: "#contact",
    },
  ];
  const [activeMenu, setActiveMenu] = useState("");

  const handleHashChange = () => {
    const hash = window.location.hash;
    setActiveMenu(hash);
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const { isScrolled } = useGlobalStore();
  return (
    <Box
      sx={{
        width: "100%",
        background: isScrolled ? "#050709" : "transparent",
        height: "100px",
        ...flexStyle("", "", "", "space-between"),
        paddingX: 20,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isScrolled ? "0 0 30px var(--boxShadow)" : "unset",
        position: isScrolled ? "fixed" : "relative",
        zIndex: 1000,
      }}
    >
      <PrimaryTypography variant="secondary" name="JersApp" size="lg" />
      <Box sx={{ ...flexStyle("", 7, "", "") }}>
        {lists.map((elem: any, index: number) => {
          return (
            <ListItem
              onClick={() => {
                router.push(elem.id);
                setActiveMenu(elem.id);
              }}
              lable={elem.lable}
              isSelected={activeMenu == elem.id}
              key={index}
            />
          );
        })}
        <GButton lable="Hire me!" />
      </Box>
    </Box>
  );
}
