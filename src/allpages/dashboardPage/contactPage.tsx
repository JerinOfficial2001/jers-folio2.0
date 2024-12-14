"use client";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import { flexStyle } from "@/styles/commonStyles";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function ContactPage({}: Props) {
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
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton lable="Add" startIcon={<MdAdd />} />
        </Grid2>
      </Grid2>
      <NoDataFound />
    </Stack>
  );
}
