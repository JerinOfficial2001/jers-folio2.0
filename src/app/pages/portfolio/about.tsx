import { HeaderTypography } from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import AboutCard from "@/app/components/portfolioComponents/AboutCard";
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function About({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();

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
        {[
          {
            company_name: "Iprotecs",
            place: "Coimbatore",
            year: "2023 - present",
          },
        ].map((elem: any, index: number) => {
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
        {[
          {
            course: "BE-Mechatronics Engineering",
            year: "2019 - 2023",
            name: "SNS College of technology",
          },
          {
            course: "Higher Secondary",
            year: "2018 - 2019",
            name: "SARU Matric Higher Secondary School",
          },
          {
            course: "SSLC",
            year: "2016 - 2017",
            name: "SARU Matric Higher Secondary School",
          },
        ].map((elem: any, index: number) => {
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
