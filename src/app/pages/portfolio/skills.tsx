import {
  HeaderTypography,
  TeritaryTypography,
} from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import SkillsCard from "@/app/components/portfolioComponents/SkillsCard";
import { SkillsImage } from "@/app/constants/Json";
import { flexStyle } from "@/app/styles/commonStyles";
import { Skill } from "@/app/types/interfaces";
import { Box, Container } from "@mui/material";
import React from "react";

type Props = {};

export default function Skills({}: Props) {
  const skillData: Skill[] = [
    { label: "Next Js", percent: "90%", id: "nextjs" },
    { label: "Node Js", percent: "80%", id: "figma" },
    { label: "Node Js", percent: "85%", id: "node" },
    { label: "Node Js", percent: "85%", id: "mern" },
    { label: "Node Js", percent: "85%", id: "react" },
    { label: "Node Js", percent: "85%", id: "reactnative" },
    { label: "Node Js", percent: "85%", id: "mongodb" },
    { label: "Node Js", percent: "85%", id: "express" },
    { label: "Node Js", percent: "85%", id: "python" },
    { label: "Node Js", percent: "85%", id: "java" },
  ];
  return (
    <Box
      sx={{
        background: "var(--secondaryBg)",
        padding: "150px",
      }}
      id="skills"
    >
      <Container
        sx={{
          ...flexStyle("column", "", ""),
          padding: "20px 0",
        }}
      >
        <HeaderTypography name="My Skills" variant="teritary" size="lg" />
        <TeritaryTypography
          name="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
          sx={{
            maxWidth: "60%",
            textAlign: "center",
          }}
        />
        <Box
          sx={{
            minHeight: "400px",
            ...flexStyle("", 2),
            width: "100%",
            flexFlow: "wrap",
          }}
        >
          {skillData.map((elem, index) => {
            const imageSource = SkillsImage[elem.id];
            return (
              <SkillsCard
                key={index}
                imageSrc={imageSource}
                percent={elem.percent}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
