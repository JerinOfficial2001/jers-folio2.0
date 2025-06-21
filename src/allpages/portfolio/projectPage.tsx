"use client";
import {
  PrimaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import GButton from "@/components/global/GButton";
import GlobalCarousel from "@/components/global/GCarousel";
import BackDrop from "@/components/portfolioComponents/BackDrop";
import useProjectsFunction from "@/hooks/functions/useProjectsFunction";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

export default function ProjectPage({ }: Props) {
  const router = useRouter();
  const pathname: any = usePathname();
  const project_id = pathname.split("/")[2];
  const { projectData, projectLoading, projectError, projectRefetch } =
    useProjectsFunction({ project_id });
  const { setIsLoading } = useGlobalStore();
  useEffect(() => {
    if (projectLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [projectLoading]);

  return (
    <Stack id="works">
      <BackDrop image={projectData?.images[projectData?.primaryImage]?.url}>
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
              src={projectData?.icon?.url}
            ></Box>
            <GButton
              lable={
                projectData?.projectType == "website" ? "Visit" : "Download"
              }
              // variant="secondary"
              sx={{ width: "min-content", borderRadius: "10px" }}
              onClickHandler={() => {
                if (projectData?.link) {
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
