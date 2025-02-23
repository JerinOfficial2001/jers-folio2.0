import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { MenuOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { HeaderTypography, SecondaryTypography } from "../CustomTypography";
import ResponsiveNavItems from "./ResponsiveNavItems";

type Props = { email: string; isLoading: boolean; isProject: boolean };

export default function TopBar({ email, isLoading, isProject }: Props) {
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
    // {
    //   lable: "Testimonials",
    //   to: "testimonials",
    //   offset: 10,
    // },
    {
      lable: "Contact",
      to: "contact",
      offset: 10,
    },
  ];
  const { isScrolled } = useGlobalStore();
  const { isxs, issm } = useMuiBreakpoints();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <SecondaryTypography variant="secondary" name={email} />
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
        email={email}
        isLoading={isLoading}
        isProject={isProject}
      />
    </Box>
  );
}
