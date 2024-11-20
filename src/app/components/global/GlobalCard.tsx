import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { PrimaryTypography, TeritaryTypography } from "../CustomTypography";
import Comma from "../../../../public/svgs/comma";

type Props = {
  title: string;
  projectName: string;
  variant?: "primary" | "secondary" | "teritary" | "";
  count?: number;
};

export default function GlobalCard({
  title,
  projectName,
  variant,
  count,
}: Props) {
  const [isHovered, setisHovered] = useState("");
  const flexDirection = variant == "primary" ? "row" : "column";
  const MainContainerFlex = variant == "secondary" ? "flex-start" : "center";
  const MainContainerPadding =
    variant == "primary" ? "10px" : variant == "secondary" ? "30px" : "0";
  const MainContainerWidth =
    variant == "primary" ? "100%" : variant == "secondary" ? "80%" : "90%";
  const ImageContainerWidth =
    variant == "primary" || variant == "secondary" ? "100px" : "100%";
  const ImageContainerHeight =
    variant == "primary" || variant == "secondary" ? "100px" : "60%";
  const ImageContainerBorderRadius =
    variant == "primary"
      ? "50%"
      : variant == "secondary"
      ? "5px 5px 5px 100%"
      : "15px 15px 40% 40% ";
  const TextContainerFlex =
    variant == "primary" || variant == "secondary" ? "flex-start" : "center";
  const TextContainerFlexDirection =
    variant == "primary" ? "column-reverse" : "column";
  const ImageContainerStyle =
    variant == "primary" || variant == "secondary"
      ? {
          height: "100%",
          width: "100%",
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
  return (
    <Box
      onMouseEnter={() => setisHovered(title)}
      onMouseLeave={() => setisHovered("")}
      sx={{
        height: MainContainerWidth,
        width: MainContainerWidth,
        borderRadius: "15px",
        background: "var(--cardBg)",
        ...flexStyle(
          flexDirection,
          "10px",
          MainContainerFlex,
          variant == "secondary" ? "space-between" : "flex-start"
        ),
        "&:hover": {
          background: "var(--cardhoverBg)",
        },
        cursor: "pointer",
        transition: ".3s",
        padding: MainContainerPadding,
      }}
    >
      {count && <PrimaryTypography name={count} />}
      <Box
        sx={{
          height: ImageContainerHeight,
          width: ImageContainerWidth,
          boxShadow: "0 2px 0px 0px var(--boxShadow)",
          borderRadius: ImageContainerBorderRadius,
          ...flexStyle("", "", "flex-end", ""),
          background:
            isHovered == title
              ? "var(--cardhoverSecondary)"
              : "var(--cardBgSecondary)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ ...ImageContainerStyle }}
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
      {variant == "secondary" && (
        <Comma
          style={{
            color: "var(--primary)",
          }}
          isHovered={isHovered == title}
        />
      )}
      {variant == "secondary" && (
        <TeritaryTypography
          name={
            "Taylor is a professional Designer he really helps my business by providing value to my business."
          }
        />
      )}
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
    </Box>
  );
}
