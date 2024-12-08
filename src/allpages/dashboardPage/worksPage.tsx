"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GToggleButton from "@/components/global/GToggleButton";
import useProjects from "@/hooks/useProjects";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Grid2, Stack } from "@mui/material";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function WorksPage({}: Props) {
  const [project, setproject] = useState("Website");
  const handleOnchange = (e: any, value: string) => {
    setproject(value);
  };
  const { handleOpenPopUp } = useGlobalStore();
  const { webProjectDatas, appProjects } = useProjects();
  const projects = project == "Website" ? webProjectDatas : appProjects;

  return (
    <Stack
      sx={{
        height: "auto",
        width: "100%",
        position: "relative",
        alignItems: "center",
        gap: 5,
      }}
    >
      <GToggleButton
        handleChange={handleOnchange}
        alignment={project}
        buttons={["Website", "Application"]}
        customStyle={{ width: "180px", position: "sticky", top: 0, zIndex: 10 }}
      />
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={1}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton
            onClickHandler={() => handleOpenPopUp("project")}
            lable="Add"
            startIcon={<MdAdd />}
          />
        </Grid2>
        {projects.map((elem: any, index: number) => {
          return (
            <Grid2
              size={{
                md: 12,
              }}
              key={index}
            >
              <Card>
                <Stack direction={"row"} gap={3} sx={{ width: "100%" }}>
                  <Box
                    sx={{ height: "100%", overflow: "hidden", width: "460px" }}
                  >
                    <Grid2
                      container
                      columnGap={1}
                      rowGap={1}
                      sx={{ ...flexStyle("", 1, "", "space-between") }}
                    >
                      <Grid2 size={8}>
                        <Box
                          src={elem.images[elem.primaryImage].image}
                          component={"img"}
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Grid2>
                      <Grid2 size={3.7}>
                        <Grid2
                          container
                          columnGap={1}
                          rowGap={1.5}
                          sx={{
                            ...flexStyle("", 1, "", "space-between"),
                            width: "100%",
                          }}
                        >
                          {elem.images
                            .slice(1, 3)
                            .map((elem: any, index: number) => {
                              return (
                                <Grid2 key={index} size={12}>
                                  <Box
                                    src={elem.image}
                                    component={"img"}
                                    sx={{
                                      height: "100%",
                                      width: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Grid2>
                              );
                            })}
                        </Grid2>
                      </Grid2>

                      {elem.images.slice(3).map((elem: any, index: number) => {
                        return (
                          <Grid2 key={index} size={3.7}>
                            <Box
                              src={elem.image}
                              component={"img"}
                              sx={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Grid2>
                        );
                      })}
                    </Grid2>
                  </Box>
                  <Stack sx={{ width: "50%" }}>
                    <PrimaryTypography name={elem.title} variant="primary" />
                    <TeritaryTypography name={elem.description} />
                    <TeritaryTypography name={elem.about} size="xs" />
                  </Stack>
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
