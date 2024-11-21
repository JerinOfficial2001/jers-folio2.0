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
      ? { md: "36px", sm: "25px", xs: "20px" }
      : size == "lg"
      ? { md: "45px", sm: "30px", xs: "25px" }
      : size == "sm"
      ? { md: "20px", sm: "18px", xs: "15px" }
      : { md: "65px", sm: "40px", xs: "25px" };

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
      ? { md: "36px", sm: "25px", xs: "20px" }
      : size == "md"
      ? { md: "25px", sm: "20px", xs: "15px" }
      : size == "sm"
      ? "16px"
      : size == "xs"
      ? { md: "15px", sm: "12px", xs: "10px" }
      : { md: "20px", sm: "15px", xs: "10px" };

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
      ? { md: "16px", sm: "12px", xs: "10px" }
      : size == "xs"
      ? { md: "15px", sm: "11px", xs: "9px" }
      : { md: "20px", sm: "15px", xs: "10px" };

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
      : { md: "16px", sm: "12px", xs: "10px" };

  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle("teritary", variant, fontSize, sx)}
    >
      {name}
    </Typography>
  );
}
