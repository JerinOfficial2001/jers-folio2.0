import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  variant?: "primary" | "secondary" | "teritary";
  size?: "lg" | "md" | "sm" | "xs";
  fontFamily?: "bold" | "medium" | "regular" | "light";
  sx?: any;
};
const defaultStyle = (
  variant?: "primary" | "secondary" | "teritary",
  fontSize?: "lg" | "md" | "sm" | "xs",
  fontFamily?: "bold" | "medium" | "regular" | "light",
  sx?: any
) => {
  const commonstyle = {
    fontSize,
    fontFamily,
    ...sx,
  };
  return variant == "primary" || !variant
    ? {
        color: "var(--text)",
        ...commonstyle,
      }
    : {
        color: "transparent",
        backgroundImage:
          variant == "secondary"
            ? "var(--textSecondary)"
            : variant == "teritary"
            ? "var(--textTeritary)"
            : "var(--textPrimary)",
        WebkitBackgroundClip: "text",
        ...commonstyle,
      };
};
export function HeaderTypography({
  name,
  variant,
  size,
  fontFamily,
  sx,
}: Props) {
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
  const fontFamilyStyle: any =
    fontFamily == "light"
      ? "Sora-light"
      : fontFamily == "medium"
      ? "Sora-medium"
      : fontFamily == "regular"
      ? "Sora-regular"
      : "Sora-bold";
  return (
    <Typography
      className="preventSelect"
      sx={{
        ...defaultStyle(variant, fontSize, fontFamilyStyle, sx),
      }}
    >
      {name}
    </Typography>
  );
}
export function PrimaryTypography({
  name,
  variant,
  size,
  fontFamily,
  sx,
}: Props) {
  const fontSize: any =
    size == "lg"
      ? "50px"
      : size == "md"
      ? "30px"
      : size == "xs"
      ? "12px"
      : "15px";
  const fontFamilyStyle: any =
    fontFamily == "medium"
      ? "Sora-medium"
      : fontFamily == "light"
      ? "Sora-light"
      : fontFamily == "regular"
      ? "Sora-regular"
      : "Sora-bold";
  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle(variant, fontSize, fontFamilyStyle, sx)}
    >
      {name}
    </Typography>
  );
}
export function SecondaryTypography({
  name,
  variant,
  size,
  fontFamily,
  sx,
}: Props) {
  const fontSize: any =
    size == "lg"
      ? "50px"
      : size == "md"
      ? "30px"
      : size == "sm"
      ? "16px"
      : size == "xs"
      ? "12px"
      : "20px";
  const fontFamilyStyle: any =
    fontFamily == "bold"
      ? "Sora-bold"
      : fontFamily == "light"
      ? "Sora-light"
      : fontFamily == "medium"
      ? "Sora-medium"
      : "Sora-regular";
  return (
    <Typography
      className="preventSelect"
      sx={defaultStyle(variant, fontSize, fontFamilyStyle, sx)}
    >
      {name}
    </Typography>
  );
}
