"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import { WorkSkeleton } from "@/components/dashboard/skeleton/WorkSkeleton";
import GButton from "@/components/global/GButton";
import GToggleButton from "@/components/global/GToggleButton";
import {
  deleteProjectById,
  getProjectsByType,
  updateProjectVisibility,
} from "@/services/project";
import { useFormDatatore } from "@/store/FormDataStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Grid2, Skeleton, Stack } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function WorksPage({}: Props) {
  //*HOOKS
  const [project, setproject] = useState("website");
  const [projectVisiblity, setprojectVisiblity] = useState<any>([]);

  const queryClient = useQueryClient();

  const { handleOpenPopUp } = useGlobalStore();
  const { resetForm, setWorkFormData } = useFormDatatore();

  //*FUNCTIONS
  const handleOnchange = (e: any, value: string) => {
    setproject(value);
  };
  const handleVisiblityOnchange = (e: any, index: number, id: any) => {
    let tempVisiblities: any = [...projectVisiblity];
    tempVisiblities[index] = { isVisible: e.target.checked };
    setprojectVisiblity(tempVisiblities);
    UpdateVisibility({ id, payload: { isVisible: e.target.checked } });
  };
  const handleEditProject = (id: any) => {
    handleOpenPopUp(project, id);
    setWorkFormData("projectType", project);
  };
  const handleDeleteProject = (id: any) => {
    DeleteProject(id);
  };

  //*API CALLS
  const {
    data: Projects,
    isLoading: projectsLoading,
    error: projectError,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectsByType(project.toLowerCase()),
  });
  const { mutate: UpdateVisibility, isPending: updatingVisibility } =
    useMutation({
      mutationKey: ["updateProjectVisibility"],
      mutationFn: (data: any) =>
        updateProjectVisibility(data?.payload, data?.id),
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        toast.success(data.message);
      },
    });
  const { mutate: DeleteProject, isPending: deleting } = useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: (id: any) => deleteProjectById(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(data.message);
    },
  });

  //*CONDITIONAL VARIABLES
  const isWebsite = project == "website" ? true : false;
  const slicedArr = (elem: any) =>
    isWebsite ? elem.images.slice(1, 3) : elem.images.slice(1);

  //*STYLES
  const defaultImageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 3,
  };

  //*USEEFFECTS
  useEffect(() => {
    if (Projects) {
      setprojectVisiblity(
        Projects?.map((elem: any) => ({ isVisible: elem.isVisible }))
      );
    }
  }, [Projects]);
  useEffect(() => {
    refetch();
  }, [isWebsite]);

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
        buttons={["website", "application"]}
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
            onClickHandler={() => {
              handleOpenPopUp(project), resetForm("workFormData");
              setWorkFormData("projectType", project);
            }}
            lable="Add"
            startIcon={<MdAdd />}
          />
        </Grid2>

        {projectsLoading
          ? [1, 2, 3, 4, 5]?.map((elem: any, index: number) => {
              return (
                <WorkSkeleton
                  index={index}
                  defaultImageStyle={defaultImageStyle}
                  isWebsite={isWebsite}
                  key={index}
                />
              );
            })
          : Projects?.map((elem: any, index: number) => {
              return (
                <Grid2
                  size={{
                    md: 12,
                  }}
                  key={index}
                >
                  <Card
                    editHandler={() => handleEditProject(elem._id)}
                    deleteHandler={() => handleDeleteProject(elem._id)}
                    isVisible={projectVisiblity[index]?.isVisible || false}
                    handleOnchange={(e: any) =>
                      handleVisiblityOnchange(e, index, elem._id)
                    }
                    btnDirection="row"
                    showSwitch={true}
                  >
                    <Stack direction={"row"} gap={3} sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          height: "100%",
                          overflow: "hidden",
                          width: "460px",
                        }}
                      >
                        <Grid2
                          container
                          columnGap={1}
                          rowGap={1}
                          sx={{ ...flexStyle("", 1, "", "space-between") }}
                        >
                          <Grid2 size={isWebsite ? 8 : 2.75}>
                            <Box
                              src={elem.images[elem.primaryImage]?.url}
                              component={"img"}
                              sx={{
                                ...defaultImageStyle,
                              }}
                            />
                          </Grid2>

                          <Grid2 size={isWebsite ? 3.7 : 8.5}>
                            <Grid2
                              container
                              columnGap={1}
                              rowGap={isWebsite ? 1.5 : 1}
                              sx={{
                                ...flexStyle(
                                  "",
                                  isWebsite ? 1 : 2,
                                  "",
                                  isWebsite ? "space-between" : ""
                                ),
                                width: "100%",
                              }}
                            >
                              {slicedArr(elem).map(
                                (elem: any, index: number) => {
                                  return (
                                    <Grid2
                                      key={index}
                                      size={isWebsite ? 12 : 1.9}
                                    >
                                      <Box
                                        src={elem?.url}
                                        component={"img"}
                                        sx={{
                                          ...defaultImageStyle,
                                        }}
                                      />
                                    </Grid2>
                                  );
                                }
                              )}
                            </Grid2>
                          </Grid2>

                          {isWebsite &&
                            elem.images
                              .slice(3, 6)
                              .map((data: any, index: number) => {
                                return (
                                  <Grid2
                                    key={index}
                                    size={3.7}
                                    sx={{ position: "relative" }}
                                  >
                                    {elem.images?.slice(6)?.length != 0 &&
                                      index == 2 && (
                                        <Box
                                          sx={{
                                            ...defaultImageStyle,
                                            position: "absolute",
                                            background: "#00000085",
                                            backdropFilter: "blur(1px)",
                                            ...flexStyle(),
                                          }}
                                        >
                                          <SecondaryTypography
                                            name={
                                              "+" +
                                              elem.images?.slice(6)?.length
                                            }
                                          />
                                        </Box>
                                      )}
                                    <Box
                                      src={data.url}
                                      component={"img"}
                                      sx={{
                                        ...defaultImageStyle,
                                      }}
                                    />
                                  </Grid2>
                                );
                              })}
                        </Grid2>
                      </Box>
                      <Stack sx={{ width: "50%" }}>
                        <PrimaryTypography
                          name={elem.title}
                          variant="primary"
                        />
                        <TeritaryTypography name={elem.description} />
                        <TeritaryTypography name={elem.about} size="xs" />
                      </Stack>
                    </Stack>
                  </Card>
                </Grid2>
              );
            })}
      </Grid2>
      {Projects?.length == 0 && <NoDataFound />}
    </Stack>
  );
}
