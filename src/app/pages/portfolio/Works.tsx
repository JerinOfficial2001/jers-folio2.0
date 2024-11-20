import {
  HeaderTypography,
  SecondaryTypography,
} from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import GlobalCard from "@/app/components/global/GlobalCard";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container, Grid2 } from "@mui/material";
import React from "react";

type Props = {};

export default function Works({}: Props) {
  return (
    <Box
      sx={{
        background: "var(--secondaryBg)",
        padding: "150px",
      }}
      id="works"
    >
      <Container
        sx={{
          ...flexStyle("column", "", ""),
        }}
      >
        <HeaderTypography name="My Recent Works" variant="teritary" size="lg" />
        <SecondaryTypography
          name={"Websites"}
          sx={{ width: "90%", margin: "50px 0 20px 0" }}
        />
        <GlobalCarousel next="swiper-button-next" prev="swiper-button-prev" />
        <SecondaryTypography
          name={"Application"}
          sx={{ width: "90%", margin: "50px 0 20px 0" }}
        />
        <Grid2
          container
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          rowGap={2}
          columnGap={2}
        >
          {[1, 2, 3, 4, 5].map((elem: any, index: number) => {
            return (
              <Grid2
                key={index}
                size={{
                  lg: 3.87,
                }}
              >
                <GlobalCard
                  count={index + 1}
                  projectName="Test"
                  title="test"
                  variant="primary"
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
}
