import { Box } from "@mui/material";
import React from "react";
import GIconButton from "../global/GIconButton";
import { GrFormEdit } from "react-icons/gr";
type Props = { children: any; size?: any };

export default function Card({ children, size }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: size == "sm" ? "180px" : size == "xs" ? "60px" : "250px",
        background: "var(--cardBg)",
        padding: 2,
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GIconButton
        icon={<GrFormEdit />}
        title={"Edit"}
        onClickHandler={() => {}}
        sx={{ position: "absolute", top: 10, right: 8 }}
      />

      {children}
    </Box>
  );
}
