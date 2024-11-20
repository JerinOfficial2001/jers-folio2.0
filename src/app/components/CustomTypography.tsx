import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  name: any;
  variant?: "primary" | "secondary" | "teritary";
  size?: "lg" | "md" | "sm" | "xs";
  sx?: any;
};
const defaultStyle = (
  buttonType: "header" | "primary" | "secondary" | "teritary" | "",
  variant?: "primary" | "secondary" | "teritary",
  fontSize?: "lg" | "md" | "sm" | "xs",
  sx?: any
) => {
  const fontFamilyStyle: any =
    buttonType == "primary" || buttonType == "header"
      ? "Sora-bold"
      : buttonType == "secondary"
      ? "Sora-medium"
      : buttonType == "teritary"
      ? "Sora-regular"
      : "Sora-light";
  const color =
    buttonType == "header"
      ? "transparent"
      : variant == "primary"
      ? "var(--primary)"
      : variant == "secondary"
      ? "white"
      : "var(--text)";
  const commonstyle = {
    fontSize,
    fontFamily: fontFamilyStyle,
    color,
    ...sx,
  };
  return buttonType == "header"
    ? {
        backgroundImage:
          variant == "secondary"
            ? "var(--textSecondary)"
            : variant == "teritary"
            ? "var(--textTeritary)"
            : "var(--textPrimary)",
        WebkitBackgroundClip: "text",
        ...commonstyle,
      }
    : {
        ...commonstyle,
      };
};
export function HeaderTypography({ name, variant, size, sx }: Props) {
  const fontSize: any =
    size == "xs"
      ? "12px"
      : size == "md"
      ? "36px"
      : size == "lg"
      ? "45px"
      : size == "sm"
      ? "20px"
      : "65px";

  return (
    <Typography
      className="preventSelect"
      sx={{
        ...defaultStyle("header", variant, fontSize, sx),
      }}
    >
      {name}
    </Typography>
  );
}
export function PrimaryTypography({ name, variant, size, sx }: Props) {
  const fontSize: any =
    size == "lg"
      ? "36px"
      : size == "md"
      ? "25px"
      : size == "sm"
      ? "16px"
      : size == "xs"
      ? "15px"
      : "20px";

  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle("primary", variant, fontSize, sx)}
    >
      {name}
    </Typography>
  );
}
export function SecondaryTypography({ name, variant, size, sx }: Props) {
  const fontSize: any =
    size == "lg"
      ? "30px"
      : size == "md"
      ? "25px"
      : size == "sm"
      ? "16px"
      : size == "xs"
      ? "15px"
      : "20px";

  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle("secondary", variant, fontSize, sx)}
    >
      {name}
    </Typography>
  );
}
export function TeritaryTypography({ name, variant, size, sx }: Props) {
  const fontSize: any =
    size == "lg"
      ? "25px"
      : size == "md"
      ? "20px"
      : size == "sm"
      ? "15px"
      : size == "xs"
      ? "12px"
      : "16px";

  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle("teritary", variant, fontSize, sx)}
    >
      {name}
    </Typography>
  );
}
