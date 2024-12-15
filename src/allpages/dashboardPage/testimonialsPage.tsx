"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Grid2, Stack } from "@mui/material";
import React from "react";

type Props = {};

export default function TestimonialsPage({}: Props) {
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={1}>
        <Grid2
          size={{
            md: 12,
          }}
        >
          <PrimaryTypography name={"Testimonials"} />
        </Grid2>
        {[1, 2, 3, 4, 5, 6].map((elem: any, index: number) => {
          return (
            <Grid2
              size={{
                md: 2.8,
              }}
              key={index}
            >
              <Card
                showSwitch={true}
                btnDirection="column"
                toolTipPlacement="right"
                size="sm"
              >
                <Stack sx={{ width: "80%" }}>
                  <Grid2
                    container
                    sx={{ width: "100%" }}
                    rowGap={1}
                    columnGap={1}
                  >
                    <Grid2 size={4}>
                      <Box component={"img"} src="/maleAvatar/2.png" />
                    </Grid2>
                    <Grid2 size={7}>
                      <SecondaryTypography name={"Iwin"} />
                    </Grid2>
                    <Grid2 size={12}>
                      <TeritaryTypography
                        size="xs"
                        name={"Full Stack Developer"}
                      />
                    </Grid2>
                    <Grid2 size={12}>
                      <TeritaryTypography
                        sx={{
                          textAlign: "start",
                        }}
                        size="xs"
                        name={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vero corrupti sunt nulla excepturi. Quam ut tempora sapiente, doloribus excepturi culpa necessitatibus, aut eaque enim autem odit, praesentium voluptatibus animi?`}
                      />
                    </Grid2>
                  </Grid2>
                </Stack>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
      <NoDataFound />
    </Stack>
  );
}
