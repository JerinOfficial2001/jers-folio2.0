import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { PrimaryTypography, TeritaryTypography } from "../CustomTypography";
import Comma from "../../../../public/svgs/comma";

type Props = {
  title: string;
  projectName: string;
  variant?:
    | "primary"
    | "secondary"
    | "teritary"
    | "website"
    | "application"
    | "";
  count?: number;
};

export default function GlobalCard({
  title,
  projectName,
  variant,
  count,
}: Props) {
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
  const defaultMainStyle =
    variant == "primary"
      ? {
          height: "100%",
          width: "100%",
          ...flexStyle("row", "10px", "center", "flex-start"),
          padding: "10px",
          ...mainCommonStyles,
        }
      : variant == "secondary"
      ? {
          height: "80%",
          width: "80%",
          ...flexStyle("column", "10px", "flex-start", "space-between"),
          padding: "30px",
          ...mainCommonStyles,
        }
      : !showText
      ? {
          height: "90%",
          width: "90%",
          cursor: "pointer",
        }
      : {
          height: "90%",
          width: "90%",
          padding: 0,
          ...mainCommonStyles,
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

  const defaultImageContainerStyle =
    variant == "primary"
      ? {
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          ...imageContainerCommonStyle,
        }
      : variant == "secondary"
      ? {
          height: "100px",
          width: "100px",
          borderRadius: "5px 5px 5px 100%",
          ...imageContainerCommonStyle,
        }
      : !showText
      ? {
          height: "100%",
          width: "100%",
        }
      : {
          height: "60%",
          width: "100%",
          borderRadius: "15px 15px 40% 40% ",
          ...imageContainerCommonStyle,
        };

  const defaultImageStyle =
    variant == "primary"
      ? {
          height: "100%",
          width: "100%",
        }
      : variant == "secondary"
      ? {
          height: "100%",
          width: "100%",
        }
      : !showText
      ? {
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          transition: ".3s",
        }
      : {
          height: isHovered == title ? "90%" : "60%",
          width: isHovered == title ? "90%" : "60%",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: isHovered == title ? "10px" : "10px 10px 0 0",
          transform:
            isHovered == title ? "translateY(10px)" : "translateY(10px)",
          transition: ".3s",
          boxShadow:
            isHovered == title ? "unset" : "0px 14px 6px 6px var(--blurColor)",
        };

  const TextContainerFlex =
    variant == "primary" || variant == "secondary" ? "flex-start" : "center";
  const TextContainerFlexDirection =
    variant == "primary" ? "column-reverse" : "column";
  return (
    <Box
      onMouseEnter={() => setisHovered(title)}
      onMouseLeave={() => setisHovered("")}
      sx={{
        ...defaultMainStyle,
      }}
    >
      {count && <PrimaryTypography name={count} />}
      <Box sx={{ ...defaultImageContainerStyle }}>
        <Box
          sx={{
            ...defaultImageStyle,
            "&:hover": {
              filter: !showText ? "brightness(0.5)" : "none",
            },
          }}
          component="img"
          src={
            variant == "secondary"
              ? "/maleAvatar/2.png"
              : variant == "primary"
              ? "/global/android.png"
              : "/website.png"
          }
          className="preventSelect"
        />
      </Box>
      {variant == "secondary" && showText && (
        <Comma
          style={{
            color: "var(--primary)",
          }}
          isHovered={isHovered == title}
        />
      )}
      {variant == "secondary" && showText && (
        <TeritaryTypography
          name={
            "Taylor is a professional Designer he really helps my business by providing value to my business."
          }
        />
      )}
      {showText && (
        <Stack
          direction={TextContainerFlexDirection}
          alignItems={TextContainerFlex}
        >
          <PrimaryTypography
            variant={
              variant == "secondary"
                ? "teritary"
                : isHovered == title
                ? "secondary"
                : "primary"
            }
            name={projectName}
          />
          <TeritaryTypography name={title} />
        </Stack>
      )}
    </Box>
  );
}
