import { Button } from "@mui/material";
import React from "react";

type Props = {
  lable: string;
  variant?: "primary" | "secondary" | "teritary";
  sx?: any;
  endIcon?: any;
  size?: any;
};

export default function GButton({ lable, variant, sx, endIcon, size }: Props) {
  const background =
    variant == "primary" || variant == "teritary"
      ? "transparent"
      : "var(--buttonPrimary)";
  const hoverBackground =
    variant == "primary"
      ? "var(--primary)"
      : variant == "teritary"
      ? "none"
      : "var(--buttonSecondary)";
  const border = variant == "primary" ? "1.5px solid var(--border)" : "none";
  const fontFamily =
    variant == "primary" || variant == "teritary"
      ? "Sora-regular"
      : "Sora-bold";
  const color = variant == "primary" ? "var(--border)" : "var(--text)";
  const hoverColor = "var(--text)";
  return (
    <Button
      size={size}
      sx={{
        border: border,
        color: color,
        textTransform: variant == "teritary" ? "none" : "capitalize",
        fontFamily: fontFamily,
        fontSize: { md: "16px", sm: "12px", xs: "10px" },
        borderRadius: variant == "secondary" ? 3 : 20,
        background: background,
        transition: "1s",
        "&:hover": {
          transition: "1s",
          background: hoverBackground,
          color: hoverColor,
          textDecoration: variant == "teritary" ? "underline" : "none",
        },
        padding: size ? "0 10px" : "10px 35px",

        ...sx,
      }}
      endIcon={endIcon}
    >
      {lable}
    </Button>
  );
}
