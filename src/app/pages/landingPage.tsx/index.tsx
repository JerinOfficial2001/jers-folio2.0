"use client";
import {
  HeaderTypography,
  PrimaryTypography,
} from "@/app/components/CustomTypography";
import GButton from "@/app/components/global/GButton";
import GlobalCard from "@/app/components/global/GlobalCard";
import { flexStyle } from "@/app/styles/commonStyles";
import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  const router = useRouter();
  //   const getData = () => {
  //     for (let index = 1; index < 35; index++) {
  //       console.log(`${index}:'/femaleAvatar/${index}.png',`);
  //     }
  //   };
  //   getData();
  return (
    <Container sx={{ height: "100vh" }}>
      <Box sx={{ ...flexStyle("", "", "", "space-between"), height: "80px" }}>
        <HeaderTypography name={"Jers-folio"} size="md" />
        <GButton lable="Let's get started" endIcon={<ArrowForward />} />
      </Box>
      <Stack gap={1}>
        <Box sx={{ ...flexStyle("", "", "", "space-between"), marginTop: 5 }}>
          <PrimaryTypography variant="primary" name={`Portfolio's`} />
          <GButton size={"small"} lable="view more" variant="teritary" />
        </Box>
        <Grid2 container rowGap={1} columnGap={2}>
          {[
            {
              _id: 1,
              name: "Jerin",
              role: "Mern Stack Developer",
              image_id: 3,
              gender: "male",
              image: null,
            },
            {
              _id: 1,
              name: "Iwin",
              role: "Full Stack Developer",
              image_id: 2,
              gender: "male",
              image: null,
            },
            {
              _id: 1,
              name: "Jenisha",
              role: "App Developer",
              image_id: 3,
              gender: "female",
              image: null,
            },
            {
              _id: 1,
              name: "Paul Jeba Durai",
              role: "Microgenesis Founder",
              image_id: 8,
              gender: "male",
              image: null,
            },
          ].map((elem: any, index: number) => {
            return (
              <Grid2
                size={{
                  md: 3.87,
                  sm: 6,
                  xs: 12,
                }}
                key={index}
              >
                <GlobalCard
                  projectName={elem.role}
                  title={elem.name}
                  variant="teritary"
                  onClickHandler={() => {
                    router.push(`/${elem._id}`);
                  }}
                  data={elem}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
    </Container>
  );
}
