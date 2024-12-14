import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "../CustomTypography";
import Image from "next/image";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";

type Props = {
  imageSrc: any;
  percent: number | string;
  sx?: any;
};

export default function SkillsCard({ sx, percent, imageSrc }: Props) {
  const [isHovered, setisHovered] = useState(false);
  const { isxs } = useMuiBreakpoints();
  return (
    <Stack
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      sx={{
        border: "none",
        outline: "none",
        padding: "20px 30px",
        borderRadius: "20px",
        width: "100%",
        background: "var(--cardBg)",
        "&:hover": {
          background: "var(--secondary)",
          boxShadow: "0 0 10px var(--primary)",
        },
        transition: ".6s",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        maxWidth: isxs ? "130px" : "180px",
        ...sx,
      }}
    >
      <Image
        alt="figma"
        height={100}
        width={100}
        src={imageSrc}
        style={{
          filter: !isHovered ? "grayscale(90%)" : "grayscale(0)",
          height: isxs ? "60px" : "100px",
          width: isxs ? "60px" : "100px",
          objectFit: "contain",
        }}
      />
      <PrimaryTypography name={percent} variant="primary" size="sm" />
    </Stack>
  );
}
