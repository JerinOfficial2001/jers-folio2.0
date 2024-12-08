import { flexStyle } from "@/styles/commonStyles";
import React, { useState } from "react";

type Props = {
  variant?:
    | "primary"
    | "secondary"
    | "teritary"
    | "website"
    | "application"
    | ""
    | string;
  title?: string;
  mainVariant?: any;
};

export default function useGlobalCard({ variant, title, mainVariant }: Props) {
  const [isHovered, setisHovered] = useState("");
  const showText = variant != "website" && variant != "application";
  const mainCommonStyles = {
    borderRadius: "15px",
    background: "var(--cardBg)",
    "&:hover": {
      background: "var(--cardhoverBg)",
    },
    cursor: "pointer",
    transition: ".3s",
  };
  const imageContainerCommonStyle = {
    boxShadow: "0 2px 0px 0px var(--boxShadow)",
    ...flexStyle("", "", "flex-end", ""),
    background:
      isHovered == title
        ? "var(--cardhoverSecondary)"
        : "var(--cardBgSecondary)",
    overflow: "hidden",
  };
  const commonStyles: any = {
    defaultMainStyle: {
      default: {
        height: "90%",
        width: "90%",
        padding: 0,
        ...mainCommonStyles,
      },
      primary: {
        height: "100%",
        width: "100%",
        ...flexStyle("row", "10px", "center", "flex-start"),
        padding: "10px",
        ...mainCommonStyles,
      },
      secondary: {
        height: "80%",
        width: "80%",
        ...flexStyle("column", "10px", "flex-start", "space-between"),
        padding: "30px",
        ...mainCommonStyles,
      },
      teritary: {
        height: "100%",
        width: "100%",
        ...flexStyle("row-reverse", "10px", "center", "space-between"),
        ...mainCommonStyles,
        paddingLeft: 1.5,
      },
      noText: {
        height: "90%",
        width: "90%",
        cursor: "pointer",
      },
    },
    defaultImageContainerStyle: {
      default: {
        height: "60%",
        width: "100%",
        borderRadius: "15px 15px 40% 40% ",
        ...imageContainerCommonStyle,
      },
      primary: {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        ...imageContainerCommonStyle,
      },
      secondary: {
        height: "100px",
        width: "100px",
        borderRadius: "5px 5px 5px 100%",
        ...imageContainerCommonStyle,
      },
      teritary: {
        height: "150px",
        width: "30%",
        borderRadius: "50% 15px 15px 50% ",
        ...imageContainerCommonStyle,
      },
      noText: {
        height: "100%",
        width: "100%",
        ...flexStyle(),
        position: "relative",
      },
    },
    defaultImageStyle: {
      default: {
        height: isHovered == title ? "90%" : "80%",
        width: isHovered == title ? "90%" : "80%",
        objectFit: "cover",
        objectPosition: "top",
        borderRadius: isHovered == title ? "10px" : "10px 10px 0 0",
        transform: isHovered == title ? "translateY(10px)" : "translateY(10px)",
        transition: ".3s",
        boxShadow: isHovered == title ? "unset" : "0px 14px 6px 6px black",
      },
      primary: {
        height: "100%",
        width: "100%",
      },
      secondary: {
        height: "100%",
        width: "100%",
      },
      teritary: {
        height: "110%",
        width: "100%",
      },
      noText: {
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        transition: ".3s",
      },
    },
  };

  const TextContainerFlex =
    variant == "primary" || variant == "secondary" || variant == "teritary"
      ? "flex-start"
      : "center";
  const TextContainerFlexDirection: any =
    variant == "primary" || variant == "teritary" ? "column-reverse" : "column";

  return {
    isHovered,
    setisHovered,
    TextContainerFlexDirection,
    TextContainerFlex,
    showText,
    commonStyles,
  };
}
