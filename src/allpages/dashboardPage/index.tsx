"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import GButton from "@/components/global/GButton";
import GIconButton from "@/components/global/GIconButton";
import { links } from "@/constants/Json";
import { flexStyle } from "@/styles/commonStyles";
import { linkKey, linkType } from "@/types/interfaces";
import { Box, Grid2, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function DashboardPage({}: Props) {
  const GridDatas = [
    {
      title: "Home",
      data: "",
      content: [],
      type: "Custom",
      to: "/dashboard/home",
    },
    {
      title: "Work",
      data: "",
      content: [
        {
          title: "Home",
          data: "",
          width: 12,
          card: "xs",
        },
        {
          title: "Website",
          data: "",
          width: 5.9,
          card: "sm",
          image: "/global/website.png",
          to: "/dashboard/works",
        },
        {
          title: "Application",
          data: "",
          width: 5.9,
          card: "sm",
          image: "/global/android.png",
          to: "/dashboard/works",
        },
      ],
    },
    {
      title: "About",
      data: "",
      content: [],
      image: "/dashboard/About.png",
      to: "/dashboard/about",
    },
    {
      title: "Skills",
      data: "",
      content: [],
      image: "/dashboard/skills.png",
      to: "/dashboard/skills",
    },
    {
      title: "Contact Us",
      data: "",
      content: [],
      image: "/dashboard/Contact.png",
      to: "/dashboard/contact",
    },

    {
      title: "Testimonials",
      data: "",
      content: [],
      image: "/dashboard/testimonial.png",
      to: "/dashboard/testimonials",
    },
    {
      title: "Resume Builder",
      data: "",
      content: [],
      image: "",
      to: "/dashboard",
    },
  ];
  const router = useRouter();
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
          <GButton lable="Publish" />
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