import {
  HeaderTypography,
  PrimaryTypography,
  SecondaryTypography,
} from "@/app/components/CustomTypography";
import GButton from "@/app/components/global/GButton";
import { flexStyle } from "@/app/styles/commonStyles";
import { FileDownload } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <Container id="#home" sx={{ ...flexStyle("", "", "", "space-between") }}>
      <Stack sx={{ justifyContent: "center", width: "50%", gap: 4 }}>
        <HeaderTypography name="I am Jerin" size="md" />
        <Stack>
          <HeaderTypography
            sx={{
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
            name="MERN Stack + "
            variant="teritary"
          />
          <HeaderTypography
            sx={{
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
            name="APP Developer"
            variant="teritary"
          />
        </Stack>
        <SecondaryTypography name="I break down complex user experience problems to create integrity focussed solutions that connect billions of people" />
        <GButton
          variant="primary"
          lable="Download CV"
          sx={{ width: "250px" }}
          endIcon={<FileDownload />}
        />
      </Stack>
      <Stack sx={{ ...flexStyle("column"), width: "50%", padding: 5 }}>
        <Box
          sx={{
            background: "var(--skeleton)",
            height: "500px",
            width: "450px",
            borderRadius: 20,
            transform: "rotate(7deg)",
            "&:hover": {
              transform: "rotate(0deg)",
              boxShadow: "0px 0px 10px 0px var(--boxShadow)",
            },
            boxShadow: "-9px 9px 10px 0px var(--boxShadow)",
            transition: ".3s",
            cursor: "pointer",
          }}
        />
      </Stack>
    </Container>
  );
}
