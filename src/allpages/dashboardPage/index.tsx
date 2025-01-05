"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import GButton from "@/components/global/GButton";
import GIconButton from "@/components/global/GIconButton";
import { GridDatas, links } from "@/constants/Json";
import { logout } from "@/services/auth";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { linkKey, linkType } from "@/types/interfaces";
import { Box, Grid2, Stack } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
type Props = {};

export default function DashboardPage({}: Props) {
  const router = useRouter();
  const { handleOpenPopUp } = useGlobalStore();
  const queryClient = useQueryClient();

  const { mutate: handleLogout, isPending: logoutProcessing } = useMutation({
    mutationFn: logout,
    onSuccess: (res: any) => {
      // queryClient.invalidateQueries({ queryKey: ["login"] });
      router.push("/");
      toast.success(res.message);
    },
    onError: (res: any) => {
      toast.error(res.error);
    },
  });
  return (
    <Stack sx={{ height: "100%", justifyContent: "flex-start" }}>
      <Grid2
        container
        sx={{ width: "100%", height: "100%" }}
        rowGap={1}
        columnGap={1}
      >
        <Grid2
          size={12}
          sx={{
            ...flexStyle("column", "", "flex-end", "space-between"),
          }}
        >
          <GButton
            loading={logoutProcessing}
            onClickHandler={handleLogout}
            lable="Logout"
          />
          <GButton
            onClickHandler={() => handleOpenPopUp("progress")}
            lable="Publish"
          />
        </Grid2>
        {GridDatas.map((elem: any, index: number) => {
          if (elem?.type == "Custom") {
            return (
              <Grid2
                key={index}
                size={{ md: 5.9 }}
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  component={"img"}
                  sx={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -40,
                    left: -10,
                    zIndex: 1,
                    boxShadow: "-9px 9px 10px 0px var(--boxShadow)",
                  }}
                  src="/maleAvatar/3.png"
                />
                <Card
                  onClickHandler={() => {
                    router.push(elem?.to);
                  }}
                >
                  <Stack
                    sx={{
                      ...flexStyle("column", "", "flex-end", "space-between"),
                      marginTop: 3,
                      height: "90%",
                      width: "100%",
                    }}
                  >
                    <Stack sx={{ width: "50%" }}>
                      <PrimaryTypography name={"Jerin T"} size="lg" />
                      <SecondaryTypography name={"MERN Stack Developer"} />
                    </Stack>
                    <Box
                      sx={{
                        width: "100%",
                        ...flexStyle("", "", "center", "space-between"),
                      }}
                    >
                      {Object.keys(links).map((btn: any, btnIndex: number) => {
                        return (
                          <GIconButton
                            variant="primary"
                            key={btnIndex}
                            icon={links[btn as keyof linkKey]?.icon}
                            onClickHandler={() => {}}
                          />
                        );
                      })}
                      <GButton lable="View Resume" />
                    </Box>
                  </Stack>
                </Card>
              </Grid2>
            );
          } else if (elem.content.length > 0) {
            return (
              <Grid2 key={index} size={{ md: 5.9 }}>
                <Grid2
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ width: "100%", height: "100%" }}
                >
                  {elem.content.map((nestedElem: any, nestedIndex: number) => {
                    return (
                      <Grid2 key={nestedIndex} size={{ md: nestedElem.width }}>
                        <Card
                          onClickHandler={() => {
                            router.push(nestedElem.to);
                          }}
                          size={nestedElem.card}
                        >
                          <SecondaryTypography name={nestedElem.title} />
                          {nestedElem.image && (
                            <Box
                              sx={{
                                width: "100%",
                                ...flexStyle(),
                                height: "100%",
                              }}
                            >
                              <Box
                                component={"img"}
                                src={nestedElem.image}
                                sx={{
                                  width: "100%",
                                  height: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          )}
                        </Card>
                      </Grid2>
                    );
                  })}
                </Grid2>
              </Grid2>
            );
          } else if (index == 2 || index == 3 || index == 4) {
            return (
              <Grid2 key={index} size={{ md: 3.9 }}>
                <Card
                  onClickHandler={() => {
                    router.push(elem?.to);
                  }}
                >
                  <SecondaryTypography name={elem.title} />
                  <Box
                    sx={{
                      width: "100%",
                      ...flexStyle(),
                      height: "100%",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={elem.image}
                      sx={{
                        width: "100%",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Card>
              </Grid2>
            );
          } else {
            return (
              <Grid2 key={index} size={{ md: 5.9 }}>
                <Card
                  onClickHandler={() => {
                    router.push(elem.to);
                  }}
                >
                  <SecondaryTypography name={elem.title} />
                  {elem.image && (
                    <Box
                      sx={{
                        width: "100%",
                        ...flexStyle(),
                        height: "100%",
                      }}
                    >
                      <Box
                        component={"img"}
                        src={elem.image}
                        sx={{
                          width: "100%",
                          height: "150px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  )}
                </Card>
              </Grid2>
            );
          }
        })}
      </Grid2>
    </Stack>
  );
}
