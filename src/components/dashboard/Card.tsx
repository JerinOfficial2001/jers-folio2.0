import { Box, Stack } from "@mui/material";
import React from "react";
import GIconButton from "../global/GIconButton";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
type Props = {
  btnDirection?: "row" | "column";
  children: any;
  size?: "sm" | "xs";
  onClickHandler?: () => void;
  toolTipPlacement?: "top" | "right" | "left" | "bottom";
};

export default function Card({
  children,
  size,
  onClickHandler,
  btnDirection,
  toolTipPlacement,
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: size ? "auto" : "250px",
        background: "var(--cardBg)",
        padding: 2,
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
        minHeight: size == "sm" ? "180px" : size == "xs" ? "60px" : "auto",
      }}
    >
      <Stack
        direction={btnDirection}
        sx={{ position: "absolute", top: 10, right: 8, gap: 1 }}
      >
        <GIconButton
          toolTipPlacement={toolTipPlacement || "top"}
          icon={<GrFormEdit />}
          title={"Edit"}
          onClickHandler={onClickHandler}
        />
        {btnDirection && (
          <GIconButton
            toolTipPlacement={toolTipPlacement || "top"}
            icon={<MdDeleteOutline />}
            title={"Delete"}
            onClickHandler={onClickHandler}
          />
        )}
      </Stack>

      {children}
    </Box>
  );
}
