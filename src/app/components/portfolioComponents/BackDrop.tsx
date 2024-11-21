import { flexStyle } from "@/app/styles/commonStyles";
import { Box } from "@mui/material";
import React from "react";

type Props = { children: any };

export default function BackDrop({ children }: Props) {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        ...flexStyle(),
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "20%",
          height: "100%",
          background: "var(--background)",
          boxShadow: "0 0 100px 250px var(--background)",
          position: "relative",
          ...flexStyle("column", "", "flex-start", "flex-end"),
          zIndex: 1,
          padding: "0px 0px 100px 100px",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background:
            "linear-gradient(264.31deg, rgba(0, 0, 0, 0.59) 4.08%, #000000 94.89%)",
        }}
      ></Box>
      <Box
        sx={{ height: "100%", width: "80%", objectFit: "cover" }}
        component={"img"}
        src="/website.png"
      ></Box>
    </Box>
  );
}
