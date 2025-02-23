"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import GButton from "@/components/global/GButton";
import GIconButton from "@/components/global/GIconButton";
import { FemaleImage, GridDatas, links, MaleImage } from "@/constants/Json";
import { logout } from "@/services/auth";
import { getUser } from "@/services/user";
import { useFormDatatore } from "@/store/FormDataStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { FemaleAvatar, linkKey, MaleAvatar } from "@/types/interfaces";
import {
  extractGitHubUsername,
  extractInstagramUsername,
  extractLinkedInUsername,
} from "@/utils/methods";
import {
  Avatar,
  Badge,
  Box,
  Grid2,
  Popover,
  Skeleton,
  Stack,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

type Props = {};

export default function DashboardPage({}: Props) {
  const router = useRouter();
  const { handleOpenPopUp, resetAllGlobalStore } = useGlobalStore();
  const { resetAllForm } = useFormDatatore();
  const queryClient = useQueryClient();
  const { mutate: handleLogout, isPending: logoutProcessing } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: (res: any) => {
      // queryClient.invalidateQueries({ queryKey: ["login"] });
      router.push("/");
      toast.success(res.message);
      resetAllForm();
      resetAllGlobalStore();
    },
    onError: (res: any) => {
      toast.error(res.error);
    },
  });
  const {
    data: User,
    isLoading: userLoading,
    error: userError,
  }: any = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const ImageSrc: any = User?.image
    ? User?.image && typeof User?.image == "object"
      ? User?.image?.url
      : User?.gender == "male"
      ? MaleImage[User?.image as keyof MaleAvatar]
      : FemaleImage[User?.image as keyof FemaleAvatar]
    : "/svgs/user.svg";

  // Add state for popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      sx={{ height: "100%", justifyContent: "flex-start", p: { xs: 2, md: 3 } }}
    >
      <Grid2
        container
        sx={{ width: "100%", height: "100%" }}
        rowGap={1}
        columnGap={1}
      >
        <Grid2
          size={12}
          sx={{
            ...flexStyle("row", 1, "center", "flex-end"),
            gap: { xs: 1, md: 2 },
          }}
        >
          <GButton
            onClickHandler={() => {
              handleOpenPopUp("progress");
            }}
            lable="Publish"
          />
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#44b700",
                boxShadow: "0 0 0 2px var(--background)",
              },
            }}
          >
            <Avatar
              onClick={handleClick}
              src={ImageSrc}
              sx={{
                cursor: "pointer",
                width: { xs: 35, md: 40 },
                height: { xs: 35, md: 40 },
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                bgcolor: "var(--secondary)",
              }}
            />
          </Badge>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPopover-paper": {
                mt: 1,
                borderRadius: 2,
                bgcolor: "var(--background)",
                color: "var(--text)",
                boxShadow: "0 4px 20px var(--boxShadow)",
                animation: "fadeIn 0.2s ease-in-out",
                width: { xs: "90vw", sm: "auto" },
                minWidth: { sm: 200 },
              },
              "@keyframes fadeIn": {
                from: { opacity: 0, transform: "translateY(-10px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Stack
              sx={{
                p: 2,
                minWidth: 200,
              }}
              spacing={2}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={ImageSrc} />
                <Stack>
                  <PrimaryTypography name={User?.name || "Name"} size="sm" />
                  <SecondaryTypography name={User?.role || "Role"} />
                </Stack>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  p: 1,
                  borderRadius: 1,
                  color: "var(--text)",
                  "&:hover": {
                    bgcolor: "var(--hover)",
                  },
                }}
                onClick={() => router.push("/dashboard/settings")}
              >
                <IoSettingsOutline size={20} />
                <PrimaryTypography name="Settings" size="sm" />
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  p: 1,
                  borderRadius: 1,
                  color: "var(--text)",
                  "&:hover": {
                    bgcolor: "var(--hover)",
                  },
                }}
                onClick={() => {
                  handleLogout();
                  handleClose();
                }}
              >
                <HiOutlineLogout size={20} />
                <PrimaryTypography name="Logout" size="sm" />
              </Stack>
            </Stack>
          </Popover>
        </Grid2>
        {GridDatas.map((elem: any, index: number) => {
          if (elem?.type == "Custom") {
            return (
              <Grid2
                key={index}
                size={{ xs: 12, sm: 12, md: 5.9 }}
                sx={{
                  position: "relative",
                }}
              >
                {userLoading ? (
                  <Skeleton
                    sx={{
                      width: { xs: "180px", sm: "220px" },
                      height: { xs: "180px", sm: "220px" },
                      borderRadius: "50%",
                      position: "absolute",
                      top: { xs: -30, sm: -40 },
                      left: { xs: -10, sm: -15 },
                      zIndex: 1,
                      background: "var(--skeleton)",
                    }}
                    variant="rounded"
                  />
                ) : (
                  <Box
                    component={"img"}
                    sx={{
                      width: { xs: "180px", sm: "220px" },
                      height: { xs: "180px", sm: "220px" },
                      borderRadius: "50%",
                      position: "absolute",
                      top: { xs: -30, sm: -40 },
                      left: { xs: -10, sm: -15 },
                      zIndex: 1,
                      boxShadow: "-9px 9px 10px 0px var(--boxShadow)",
                      background: "var(--secondary)",
                    }}
                    src={ImageSrc}
                  />
                )}

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
                      <PrimaryTypography
                        name={User?.name || "Name"}
                        size="lg"
                      />
                      <SecondaryTypography name={User?.role || "Role"} />
                    </Stack>
                    <Box
                      sx={{
                        width: "100%",
                        ...flexStyle(
                          userLoading ||
                            (User?.links && User?.links?.length > 0)
                            ? ""
                            : "row-reverse",
                          "",
                          "center",
                          "space-between"
                        ),
                      }}
                    >
                      <Stack direction={"row"} gap={1}>
                        {userLoading
                          ? [1, 2, 3, 4, 5].map((elem) => {
                              return (
                                <Skeleton
                                  key={elem}
                                  variant="rounded"
                                  sx={{
                                    width: "29.6px",
                                    height: "29.6px",
                                    borderRadius: "50%",
                                    background: "var(--skeleton)",
                                  }}
                                />
                              );
                            })
                          : User?.links?.map((elem: any, btnIndex: number) => {
                              const userName =
                                elem.type == "linkedin"
                                  ? extractLinkedInUsername(elem.url)
                                  : elem.type == "github"
                                  ? extractGitHubUsername(elem.url)
                                  : elem.type == "instagram"
                                  ? extractInstagramUsername(elem.url)
                                  : links[elem.type as keyof linkKey]?.label;
                              return (
                                <GIconButton
                                  variant="primary"
                                  key={btnIndex}
                                  icon={links[elem.type as keyof linkKey]?.icon}
                                  title={userName}
                                  onClickHandler={() => {
                                    window.open(elem.url, "_blank");
                                  }}
                                />
                              );
                            })}
                      </Stack>

                      <GButton lable="View Resume" />
                    </Box>
                  </Stack>
                </Card>
              </Grid2>
            );
          } else if (elem.content.length > 0) {
            return (
              <Grid2 key={index} size={{ xs: 12, sm: 12, md: 5.9 }}>
                <Grid2
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ width: "100%", height: "100%" }}
                >
                  {elem.content.map((nestedElem: any, nestedIndex: number) => {
                    return (
                      <Grid2
                        key={nestedIndex}
                        size={{
                          xs: 12,
                          sm: 5.9,
                          md: nestedElem.width,
                        }}
                      >
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
              <Grid2 key={index} size={{ xs: 12, sm: 5.9, md: 3.9 }}>
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
              <Grid2 key={index} size={{ xs: 12, sm: 12, md: 5.9 }}>
                <Card
                  onClickHandler={() => {
                    router.push(elem.to);
                  }}
                >
                  <SecondaryTypography
                    sx={{ position: "absolute" }}
                    name={elem.title}
                  />
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
                          height:
                            elem.title == "Resume Builder" ? "250px" : "150px",
                          objectFit: "contain",
                          transform:
                            elem.title == "Resume Builder"
                              ? "rotate(350deg)"
                              : "none",
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
