import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type Props = {
  lable: string;
  variant?:
    | "contained"
    | "primary"
    | "secondary"
    | "teritary"
    | "disabled"
    | "outlined";
  sx?: any;
  endIcon?: any;
  startIcon?: any;
  size?: any;
  onClickHandler?: (e?: any) => void;
};

export default function GButton({
  onClickHandler,
  lable,
  variant,
  sx,
  endIcon,
  startIcon,
  size,
}: Props) {
  const background =
    variant == "primary" || variant == "teritary" || variant == "outlined"
      ? "transparent"
      : variant == "contained"
      ? "var(--primary)"
      : "transparent";
  const hoverBackground =
    variant == "primary"
      ? "var(--primary)"
      : variant == "teritary"
      ? "none"
      : variant == "contained"
      ? "var(--secondary)"
      : "transparent";
  const border =
    variant == "primary"
      ? "1.5px solid var(--border)"
      : variant == "disabled"
      ? "1.5px solid var(--disabled)"
      : variant == "outlined"
      ? "1.5px solid var(--secondaryBg)"
      : "none";
  const fontFamily =
    variant == "primary" || variant == "teritary"
      ? "Sora-regular"
      : "Sora-bold";
  const color =
    variant == "primary"
      ? "var(--border)"
      : variant == "disabled"
      ? "var(--disabled)"
      : "var(--text)";
  const hoverColor = "var(--text)";
  const [isHovered, setisHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      onClick={onClickHandler}
      size={size}
      sx={{
        border: border,
        color: color,
        textTransform: variant == "teritary" ? "none" : "capitalize",
        fontFamily: fontFamily,
        fontSize: { md: "16px", sm: "12px", xs: "10px" },
        borderRadius: variant == "secondary" ? 3 : 20,
        background: variant != "disabled" ? background : "transparent",
        transition: "1s",
        "&:hover":
          variant != "disabled"
            ? {
                transition: "1s",
                background: hoverBackground,
                color: hoverColor,
                textDecoration: variant == "teritary" ? "underline" : "none",
              }
            : {},
        padding: size ? "0px 10px" : "10px 35px",
        overflow: "hidden",
        position: "relative",
        ...sx,
      }}
      endIcon={<div style={{ position: "relative", zIndex: 1 }}>{endIcon}</div>}
      startIcon={
        <div style={{ position: "relative", zIndex: 1 }}>{startIcon}</div>
      }
    >
      <div style={{ position: "relative", zIndex: 1 }}>{lable}</div>
      {!variant && (
        <>
          <Box
            sx={{
              position: "absolute",
              opacity: isHovered ? 1 : 0,
              background: "var(--buttonPrimary)",
              width: "100%",
              height: "100%",
              transition: ".5s",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              opacity: isHovered ? 0 : 1,
              background: "var(--buttonSecondary)",
              width: "100%",
              height: "100%",
              transition: ".5s",
            }}
          />
        </>
      )}
    </Button>
  );
}
