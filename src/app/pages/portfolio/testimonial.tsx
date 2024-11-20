import {
  HeaderTypography,
  TeritaryTypography,
} from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import AboutCard from "@/app/components/portfolioComponents/AboutCard";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function Testiminial({}: Props) {
  return (
    <Container
      sx={{
        ...flexStyle("row", 15, "flex-start", "space-between"),
        padding: "140px 160px !important",
      }}
      id="testimonials"
      maxWidth={"xl"}
    >
      <Stack
        sx={{
          width: "55%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <HeaderTypography
          name="PRAISE FOR MY WORK"
          variant="teritary"
          size="lg"
        />
        <TeritaryTypography
          name={
            "Empowering people in new a digital journey with my super services"
          }
        />
      </Stack>
      <Stack
        gap={"30px"}
        sx={{
          width: "45%",
        }}
      >
        <GlobalCarousel next="next1" prev="prev1" variant="primary" />
      </Stack>
    </Container>
  );
}
