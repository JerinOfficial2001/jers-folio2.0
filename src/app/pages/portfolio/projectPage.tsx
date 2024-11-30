"use client";
import {
  PrimaryTypography,
  TeritaryTypography,
} from "@/app/components/CustomTypography";
import GButton from "@/app/components/global/GButton";
import GlobalCarousel from "@/app/components/global/GCarousel";
import BackDrop from "@/app/components/portfolioComponents/BackDrop";
import useProjects from "@/app/hooks/useProjects";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function ProjectPage({}: Props) {
  const { projectData } = useProjects();
  const router = useRouter();
  return (
    <Stack id="works">
      <BackDrop image={projectData?.images[projectData?.primaryImage]?.image}>
        <Stack sx={{ position: "absolute", width: "max-content" }}>
          <PrimaryTypography name={projectData?.title} size="lg" />
          <TeritaryTypography name={projectData?.description} />
          <Box
            sx={{ ...flexStyle("", 2, "", "flex-start"), padding: "20px 0" }}
          >
            <Box
              sx={{
                height: "80px",
                width: "80px",
                borderRadius: 5,
                background: projectData?.icon ? "transparent" : "var(--cardBg)",
              }}
              component={"img"}
              src={projectData?.icon}
            ></Box>
            <GButton
              lable={
                projectData?.projectType == "website" ? "Visit" : "Download"
              }
              variant="secondary"
              sx={{ width: "min-content" }}
              onClickHandler={() => {
                if (projectData?.projectType == "website") {
                  window.open(projectData?.link, "_blank");
                }
              }}
            />
          </Box>
        </Stack>
      </BackDrop>
      <Stack sx={{ padding: 2, position: "relative" }}>
        <GlobalCarousel
          next="button-next"
          prev="button-prev"
          cardVariant={projectData?.projectType}
          data={projectData?.images}
        />
        <Stack sx={{ padding: { md: "30px 80px", sm: 5, xs: 3 } }}>
          <PrimaryTypography name={"About this website"} variant="primary" />
          <TeritaryTypography name={projectData?.about} />
        </Stack>
      </Stack>
    </Stack>
  );
}
