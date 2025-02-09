import { flexStyle } from "@/styles/commonStyles";
import { Box, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import ListItem from "./ListItems";
import GButton from "../global/GButton";
import { useFolioData } from "@/hooks/useFolioData";
import { Link } from "react-scroll";

type Props = {
  lists: any;
  isResponsive: boolean;
  anchorEl: any;
  open: boolean;
  handleClose: () => void;
};

export default function ResponsiveNavItems({
  lists,
  isResponsive,
  anchorEl,
  open,
  handleClose,
}: Props) {
  const pathname: any = usePathname();
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");
  const { folioData } = useFolioData();
  return !isResponsive ? (
    <Box
      sx={{
        ...flexStyle("", { xl: 7, md: 3, sm: 2, xs: 1 }, "", ""),
        marginRight: { lg: 10, md: 3 },
      }}
    >
      {lists.map((elem: any, index: number) => {
        const isSelected =
          activeMenu == elem.id || pathname?.split("/")[2] ? true : false;
        if (elem.lable == "Works") {
          return folioData?.projects ? (
            <ListItem
              offset={elem.offset}
              to={elem.to}
              onClick={() => {
                setActiveMenu(elem.to);
                if (elem.to != "works" && pathname?.split("/")[2]) {
                  router.push(`/${pathname?.split("/")[1]}`);
                }
              }}
              lable={elem.lable}
              isSelected={isSelected}
              key={index}
            />
          ) : null;
        } else {
          return (
            <ListItem
              offset={elem.offset}
              to={elem.to}
              onClick={() => {
                setActiveMenu(elem.to);
                if (elem.to != "works" && pathname?.split("/")[2]) {
                  router.push(`/${pathname?.split("/")[1]}`);
                }
              }}
              lable={elem.lable}
              isSelected={isSelected}
              key={index}
            />
          );
        }
      })}
      <GButton
        lable={
          <Link
            activeClass="link-active"
            to={"contact"}
            spy={true}
            smooth={true}
            offset={11}
            duration={100}
          >
            Hire me!
          </Link>
        }
        onClickHandler={() => {
          setActiveMenu("contact");
        }}
      />
    </Box>
  ) : (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        "& .MuiPaper-root ": {
          background: "var(--secondary)",
          width: "100%",
        },
      }}
    >
      {lists.map((elem: any, index: number) => {
        const isSelected =
          activeMenu == elem.id || pathname?.split("/")[2] ? true : false;
        return (
          <MenuItem
            sx={{
              textAlign: "center",
            }}
            key={index}
          >
            <ListItem
              offset={elem.offset}
              to={elem.to}
              onClick={() => {
                handleClose();
                setActiveMenu(elem.to);
                if (elem.to != "works" && pathname?.split("/")[2]) {
                  router.push(`/${pathname?.split("/")[1]}`);
                }
              }}
              lable={elem.lable}
              isSelected={isSelected}
            />
          </MenuItem>
        );
      })}
    </Menu>
  );
}
