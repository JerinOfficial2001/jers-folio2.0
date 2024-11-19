import { HeaderTypography } from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container } from "@mui/material";
import React from "react";

type Props = {};

export default function Works({}: Props) {
  return (
    <Box
      sx={{
        background: "var(--secondaryBg)",
        marginTop: 10,
      }}
      id="#works"
    >
      <Container
        sx={{
          ...flexStyle("column", "", ""),
          height: "100vh",
        }}
      >
        <HeaderTypography name="My Recent Works" variant="teritary" size="lg" />
        <GlobalCarousel />
      </Container>
    </Box>
  );
}
