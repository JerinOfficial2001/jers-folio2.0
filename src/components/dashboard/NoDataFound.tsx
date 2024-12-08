import { flexStyle } from "@/styles/commonStyles";
import { Box } from "@mui/material";
import React from "react";
import { SecondaryTypography } from "../CustomTypography";

type Props = {};

export default function NoDataFound() {
  return (
    <Box
      sx={{
        width: "80%",
        ...flexStyle(),
        borderRadius: "10px",
        height: "400px",
        border: "2px dashed var(--disabled)",
      }}
    >
      <SecondaryTypography
        name={" No Data Found"}
        sx={{ color: "var(--disabled)" }}
      />
    </Box>
  );
}
