import { HeaderTypography } from "@/components/CustomTypography";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import { useFolioData } from "@/hooks/useFolioData";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import React from "react";

type Props = { isLoading: boolean; about: any };

export default function About({ isLoading, about: folioData }: Props) {
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
        {isLoading
          ? [1, 2, 3].map((elem) => (
              <Skeleton
                variant="rectangular"
                key={elem}
                sx={{
                  background: "var(--skeleton)",
                  height: "130px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            ))
          : folioData?.experience?.map((elem: any, index: number) => {
              return (
                <AboutCard
                  variant="about"
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
        {isLoading
          ? [1, 2, 3].map((elem) => (
              <Skeleton
                variant="rectangular"
                key={elem}
                sx={{
                  background: "var(--skeleton)",
                  height: "130px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              />
            ))
          : folioData?.education?.map((elem: any, index: number) => {
              return (
                <AboutCard
                  variant="about"
                  place={elem.institution}
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
