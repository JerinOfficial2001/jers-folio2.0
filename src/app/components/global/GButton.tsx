import { Button } from "@mui/material";
import React from "react";

type Props = {
  lable: string;
  variant?: "primary" | "secondary" | "teritary";
  sx?: any;
  endIcon?: any;
};

export default function GButton({ lable, variant, sx, endIcon }: Props) {
  const background =
    variant == "primary" ? "transparent" : "var(--buttonPrimary)";
  const hoverBackground =
    variant == "primary" ? "var(--primary)" : "var(--buttonSecondary)";
  const border = variant == "primary" ? "1.5px solid var(--border)" : "none";
  const fontFamily = variant == "primary" ? "Sora-regular" : "Sora-bold";
  const color = variant == "primary" ? "var(--border)" : "var(--text)";
  const hoverColor = "var(--text)";
  return (
    <Button
      sx={{
        border: border,
        color: color,
        textTransform: "capitalize",
        fontFamily: fontFamily,
        fontSize: "16px",
        borderRadius: 20,
        background: background,
        transition: "background 0.4s ease",
        "&:hover": {
          transition: "background 0.4s ease",
          background: hoverBackground,
          color: hoverColor,
        },
        padding: "10px 35px",
        ...sx,
      }}
      endIcon={endIcon}
    >
      {lable}
    </Button>
  );
}
