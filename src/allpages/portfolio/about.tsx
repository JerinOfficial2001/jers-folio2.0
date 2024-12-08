import { HeaderTypography } from "@/components/CustomTypography";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import { useFolioData } from "@/hooks/useFolioData";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function About({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();
  const { folioData } = useFolioData();
  return (
    <Container
      sx={{
        ...flexStyle(
          { md: "row", sm: "column", xs: "column" },
          { md: 15, sm: 2, xs: 2 },
          "flex-start",
          "space-between"
        ),
        paddingBottom: { md: 15, sm: 5, xs: 5 },
      }}
      id="about"
      maxWidth={isxs || issm ? "xl" : "lg"}
    >
      <Stack
        gap={{ md: "30px", sm: 1, xs: 1 }}
        sx={{
          width: { md: "50%", sm: "100%", xs: "100%" },
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
      >
        <HeaderTypography name="My Experience" variant="teritary" size="lg" />
        {folioData?.experience?.map((elem: any, index: number) => {
          return (
            <AboutCard
              place={elem.place}
              year={elem.year}
              key={index}
              title={elem.company_name}
            />
          );
        })}
      </Stack>
      <Stack
        gap={{ md: "30px", sm: 1, xs: 1 }}
        sx={{
          width: { md: "50%", sm: "100%", xs: "100%" },
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
      >
        <HeaderTypography name="My Education" variant="teritary" size="lg" />
        {folioData?.education?.map((elem: any, index: number) => {
          return (
            <AboutCard
              place={elem.name}
              year={elem.year}
              key={index}
              title={elem.course}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
