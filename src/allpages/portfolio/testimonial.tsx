import {
  HeaderTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import GlobalCarousel from "@/components/global/GCarousel";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function Testiminial({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();

  return (
    <Container
      sx={{
        ...flexStyle(
          { md: "row", sm: "column", xs: "column" },
          { md: 15, sm: 0, xs: 0 },
          { md: "flex-start", sm: "center", xs: "center" },
          { md: "space-between", sm: "center", xs: "center" }
        ),
        minHeight: "90dvh",
        paddingBottom: { md: 15, sm: 5, xs: 5 },
      }}
      id="testimonials"
      maxWidth={isxs || issm ? "xl" : "lg"}
    >
      <Stack
        sx={{
          width: { md: "55%", sm: "100%", xs: "100%" },
          alignItems: { md: "flex-start", sm: "center", xs: "center" },
          justifyContent: { md: "flex-start", sm: "center", xs: "center" },
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
      >
        <HeaderTypography
          name="PRAISE FOR MY WORK"
          variant="teritary"
          size="lg"
          sx={{
            textAlign: { md: "start", sm: "center", xs: "center" },
          }}
        />
        <TeritaryTypography
          name={
            "Empowering people in new a digital journey with my super services"
          }
          sx={{
            textAlign: { md: "start", sm: "center", xs: "center" },
          }}
        />
      </Stack>
      <Stack
        gap={"30px"}
        sx={{
          width: { md: "45%", sm: "100%", xs: "100%" },
          marginTop: { md: 15, sm: 0, xs: 0 },
        }}
      >
        <GlobalCarousel next="next1" prev="prev1" variant="primary" />
      </Stack>
    </Container>
  );
}
