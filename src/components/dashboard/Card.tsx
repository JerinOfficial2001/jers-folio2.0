import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import GIconButton from "../global/GIconButton";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import GSwitch from "../global/GSwitch";
type Props = {
  btnDirection?: "row" | "column";
  children: any;
  size?: "sm" | "xs";
  deleteHandler?: (id: any) => void;
  onClickHandler?: () => void;
  editHandler?: (id: any) => void;
  toolTipPlacement?: "top" | "right" | "left" | "bottom";
  showSwitch?: boolean;
  isVisible?: any;
  handleOnchange?: (e: any) => void;
};

export default function Card({
  children,
  size,
  deleteHandler,
  btnDirection,
  toolTipPlacement,
  showSwitch,
  isVisible,
  handleOnchange,
  editHandler,
  onClickHandler,
}: Props) {
  // const [isVisible, setisVisible] = useState(false);
  // const handleOnchange = (e: any) => {
  //   setisVisible(e.target.checked);
  // };
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
        sx={{
          position: "absolute",
          top: 10,
          right: 8,
          gap: 1,
          alignItems: "center",
        }}
      >
        <GIconButton
          toolTipPlacement={toolTipPlacement || "top"}
          icon={<GrFormEdit />}
          title={"Edit"}
          onClickHandler={editHandler || onClickHandler}
        />
        {btnDirection && (
          <GIconButton
            toolTipPlacement={toolTipPlacement || "top"}
            icon={<MdDeleteOutline />}
            title={"Delete"}
            onClickHandler={deleteHandler}
          />
        )}
        {showSwitch && (
          <GSwitch
            value={isVisible}
            name="visible"
            handleChange={handleOnchange}
          />
        )}
      </Stack>

      {children}
    </Box>
  );
}
