import { flexStyle } from "@/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { PrimaryTypography, TeritaryTypography } from "../CustomTypography";
import Comma from "../../../public/svgs/comma";
import { getImage } from "@/hooks/getImage";
import useGlobalCard from "@/hooks/useGlobalCard";
import { PiSealCheckFill } from "react-icons/pi";
type Props = {
  title?: string;
  projectName: string;
  variant?:
    | "primary"
    | "secondary"
    | "teritary"
    | "website"
    | "application"
    | ""
    | string;
  count?: number;
  onClickHandler?: () => void;
  data?: any;
  mainVariant?: any;
  isSelected?: any;
};

export default function GlobalCard({
  title,
  projectName,
  variant,
  count,
  onClickHandler,
  data,
  mainVariant,
  isSelected,
}: Props) {
  const {
    isHovered,
    setisHovered,
    TextContainerFlexDirection,
    TextContainerFlex,
    showText,
    commonStyles,
  } = useGlobalCard({ variant, title, mainVariant });

  return (
    <Box
      onMouseEnter={() => setisHovered(title || projectName)}
      onMouseLeave={() => setisHovered("")}
      sx={{
        ...commonStyles.defaultMainStyle[
          showText ? (variant ? variant : "default") : "noText"
        ],
      }}
      onClick={onClickHandler}
    >
      {count && <PrimaryTypography name={count} />}
      <Box
        sx={{
          ...commonStyles.defaultImageContainerStyle[
            showText ? (variant ? variant : "default") : "noText"
          ],
        }}
      >
        <Box
          sx={{
            ...commonStyles.defaultImageStyle[
              showText ? (variant ? variant : "default") : "noText"
            ],
            "&:hover": {
              filter: !showText ? "brightness(0.5)" : "none",
            },
            objectFit: mainVariant == "mini-website" ? "contain" : "cover",
            objectPosition: "center",
          }}
          component="img"
          src={
            variant == "secondary"
              ? "/maleAvatar/2.png"
              : // : variant == "primary"
                // ? "/global/android.png"
                getImage(data?.gender, data?.image || data?.image_id)
          }
          className="preventSelect"
        />
        {mainVariant == "mini-website" && (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              color: "var(--primary)",
              ...flexStyle(),
              opacity: isSelected ? 1 : 0,
              transition: ".3s",
              pointerEvents: "none",
            }}
          >
            <PiSealCheckFill style={{ height: "40%", width: "40%" }} />
          </Box>
        )}
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
                : isHovered == title || isHovered == projectName
                ? "secondary"
                : "primary"
            }
            name={projectName}
          />
          <TeritaryTypography
            sx={{ textAlign: "center", width: "90%" }}
            name={title}
          />
        </Stack>
      )}
    </Box>
  );
}
