"use client";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GToggleButton from "@/components/global/GToggleButton";
import { flexStyle } from "@/styles/commonStyles";
import { Grid2, Stack } from "@mui/material";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function AboutPage({}: Props) {
  const [type, setType] = useState("Experience");
  const handleOnchange = (e: any, value: string) => {
    setType(value);
  };
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
      <GToggleButton
        handleChange={handleOnchange}
        alignment={type}
        buttons={["Experience", "Education"]}
        customStyle={{ width: "190px", position: "sticky", top: 0 }}
      />
      <Grid2 container sx={{ width: "100%" }}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton lable="Add" startIcon={<MdAdd />} />
        </Grid2>
        {[1, 2, 3].map((elem: any, index: number) => {
          return (
            <Grid2
              size={{
                md: 12,
              }}
              key={index}
            >
              <GlobalCard
                projectName="Coimbatore"
                title="UI Developer"
                variant="website"
              />
            </Grid2>
          );
        })}
      </Grid2>
      <NoDataFound />
    </Stack>
  );
}
