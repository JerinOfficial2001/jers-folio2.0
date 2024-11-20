import { HeaderTypography } from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import AboutCard from "@/app/components/portfolioComponents/AboutCard";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <Container
      sx={{
        ...flexStyle("row", 15, "flex-start", "space-between"),
        padding: "160px !important",
      }}
      id="about"
      maxWidth={"xl"}
    >
      <Stack
        gap={"30px"}
        sx={{
          width: "50%",
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
        gap={"30px"}
        sx={{
          width: "50%",
        }}
      >
        <HeaderTypography name="My Experience" variant="teritary" size="lg" />
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
