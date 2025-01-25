import { flexStyle } from "@/styles/commonStyles";
import { Box, Skeleton } from "@mui/material";
import React from "react";

type Props = { height?: any };

export default function PortFolioCardSkeleton({ height }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "10px",
        ...flexStyle("column", "", "flex-start", ""),
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          borderRadius: "10px",
          width: "100%",
          height: height ? height : "50px",
          background: "var(--skeleton)",
        }}
      />
    </Box>
  );
}
