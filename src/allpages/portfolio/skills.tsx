import {
  HeaderTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import SkillsCard from "@/components/portfolioComponents/SkillsCard";
import { SkillsImage } from "@/constants/Json";
import { useSkills } from "@/hooks/useSkills";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container } from "@mui/material";
import React from "react";

type Props = {};

export default function Skills({}: Props) {
  const { skillsData } = useSkills();
  return (
    <Box
      sx={{
        background: "var(--secondaryBg)",
        ...flexStyle(),
        minHeight: "90dvh",
        paddingBottom: { md: 15, sm: 5, xs: 5 },
      }}
      id="skills"
    >
      <Container
        sx={{
          ...flexStyle("column", "", "", ""),
          height: "100%",
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
      >
        <HeaderTypography name="My Skills" variant="teritary" size="lg" />
        <TeritaryTypography
          name="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
          sx={{
            maxWidth: { md: "60%", sm: "100%", xs: "100%" },
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
          {skillsData?.map((elem, index) => {
            const imageSource = SkillsImage[elem.id];
            return (
              <SkillsCard
                key={index}
                imageSrc={imageSource}
                percent={elem.label}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}