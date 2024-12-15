import { flexStyle } from "@/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import React from "react";
import VerticalLinearStepper from "./Stepper";
import { PrimaryTypography } from "@/components/CustomTypography";

type Props = {};

export default function Progress({}: Props) {
  return (
    <Stack
      sx={{
        padding: 2,
        gap: 2,
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingX: 3,
        width: "400px",
        position: "relative",
        height: "80%",
        overflowY: "auto",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 0px 2px 2px var(--secondary)",
        marginTop: 10,
        marginRight: 15,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ width: "100%", ...flexStyle() }}>
        <PrimaryTypography name={"Status"} />
      </Box>
      <VerticalLinearStepper />
    </Stack>
  );
}
