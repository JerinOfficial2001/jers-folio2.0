import { flexStyle } from "@/styles/commonStyles";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { TeritaryTypography } from "../CustomTypography";
import { IoClose } from "react-icons/io5";
type Props = {
  name: string;
};

export default function ResumeCard({ name }: Props) {
  const [isHover, setisHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      sx={{
        width: "100%",
        height: "230px",
        background: "var(--cardBg)",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        ...flexStyle(),
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          background: "var(--primary)",
          borderRadius: "5px 5px 5px 50%",
          "&:hover": {
            background: "var(--cardhoverBg)",
            color: "var(--text)",
          },
          transition: ".3s",
          opacity: isHover ? 1 : 0,
        }}
      >
        <IoClose />
      </IconButton>
      <Box sx={{ position: "absolute", bottom: 0, padding: 1 }}>
        <TeritaryTypography name={name} size="xs" />
      </Box>
    </Box>
  );
}
