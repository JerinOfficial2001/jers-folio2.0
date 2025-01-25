import { flexStyle } from "@/styles/commonStyles";
import { Box, Chip } from "@mui/material";
import React from "react";
import { TeritaryTypography } from "../CustomTypography";

type Props = { day: string; time: string; date: string; message: string };

export default function DeploymentsCard({ day, time, date, message }: Props) {
  return (
    <Box
      sx={{
        border: "1.5px dashed var(--text)",
        position: "relative",
        borderRadius: "10px",
        padding: "5px",
        ...flexStyle("column", "", "flex-start", ""),
      }}
    >
      <TeritaryTypography
        sx={{ position: "absolute", right: 3 }}
        name={time}
        size="xs"
      />
      <TeritaryTypography name={message || "No comments"} />
      <Box sx={{ ...flexStyle("", "3px", "", "flex-start") }}>
        <Chip
          label={day}
          sx={{
            background: "var(--primary)",
            fontFamily: "Sora-bold",
            textTransform: "uppercase",
            color: "var(--secondary)",
          }}
          size="small"
        />
        <TeritaryTypography name={date} />
      </Box>
    </Box>
  );
}
