"use client";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import SkillsCard from "@/components/portfolioComponents/SkillsCard";
import { SkillsImage } from "@/constants/Json";
import { useSkills } from "@/hooks/useSkills";
import { flexStyle } from "@/styles/commonStyles";
import { Skills } from "@/types/interfaces";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function SkillsPage({}: Props) {
  const { skillsData } = useSkills("jerin_25_01");

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
      <Grid2 container columnGap={1} rowGap={1} sx={{ width: "100%" }}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton lable="Add" startIcon={<MdAdd />} />
        </Grid2>
        {skillsData.map((elem: any, index: number) => {
          const imageSource = SkillsImage[elem.id as keyof Skills];
          return (
            <Grid2
              size={{
                md: 2.8,
              }}
              key={index}
            >
              <Card toolTipPlacement="right" btnDirection="column" size="sm">
                <SkillsCard
                  key={index}
                  imageSrc={imageSource}
                  percent={elem.label}
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
