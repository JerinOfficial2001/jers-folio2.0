"use client";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GSelect from "@/components/global/GSelect";
import SkillsCard from "@/components/portfolioComponents/SkillsCard";
import { SkillsImage } from "@/constants/Json";
import { useSkills } from "@/hooks/useSkills";
import { useFormDatatore } from "@/store/FormDataStore";
import { flexStyle } from "@/styles/commonStyles";
import { Skills } from "@/types/interfaces";
import { Grid2, Stack } from "@mui/material";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function SkillsPage({}: Props) {
  const { setSkillFormData, skillFormData } = useFormDatatore();
  const [skill, setskill] = useState<any>(-1);
  const handleAddSkill = () => {
    if (skill != -1) {
      const label = Object.keys(SkillsImage)[skill as any];
      if (label) {
        setSkillFormData({ label, id: skill });
        setskill(-1);
      } else {
        console.log("skill label not found");
      }
    } else {
      console.log("skill not found", skill);
    }
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
      <Grid2 container columnGap={1} rowGap={1} sx={{ width: "100%" }}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", 2), padding: 1 }}
        >
          <GSelect
            value={skill}
            onChange={(value: any) => setskill(value)}
            customStyle={{ width: "350px" }}
            options={Object.keys(SkillsImage).map(
              (elem: any, index: number) => ({
                label: elem,
                value: index,
                disabled: skillFormData
                  .map((elem: any) => elem.id)
                  .includes(index),
              })
            )}
          />
          <GButton
            onClickHandler={handleAddSkill}
            lable="Add"
            startIcon={<MdAdd />}
          />
        </Grid2>
        {skillFormData.map((elem: any, index: number) => {
          const imageSource = SkillsImage[elem.label as keyof Skills];

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
      {skillFormData.length == 0 && <NoDataFound />}
    </Stack>
  );
}
