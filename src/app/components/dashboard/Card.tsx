import { Box } from "@mui/material";
import React from "react";

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
      }}
    >
      {children}
    </Box>
  );
}
