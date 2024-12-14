"use client";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GToggleButton from "@/components/global/GToggleButton";
import AboutCard from "@/components/portfolioComponents/AboutCard";
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
      <Grid2 container columnGap={1} rowGap={1} sx={{ width: "100%" }}>
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
                md: 5.9,
              }}
              key={index}
            >
              <Card btnDirection="row" size="sm">
                <AboutCard
                  place={"coimbatore"}
                  year={"2019-2024"}
                  title={"Sns"}
                  sx={{ marginTop: 4 }}
                />
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
      <NoDataFound />
    </Stack>
  );
}
