"use client";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GToggleButton from "@/components/global/GToggleButton";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import useAboutFunction from "@/hooks/functions/useAboutFunction";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Grid2, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function AboutPage({}: Props) {
  const [type, setType] = useState("Experience");
  const { handleOpenPopUp } = useGlobalStore();
  const handleOnchange = (e: any, value: string) => {
    setType(value);
  };
  const {
    Experiences,
    experiencesLoading,
    experiencesError,
    experiencesRefetch,
    Educations,
    educationsLoading,
    educationsError,
    educationsRefetch,
  } = useAboutFunction(type);
  const CurrentData = type == "Experience" ? Experiences : Educations;
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
      <GToggleButton
        handleChange={handleOnchange}
        alignment={type}
        buttons={["Experience", "Education"]}
        customStyle={{ width: "190px", position: "sticky", top: 0 }}
      />
      <Grid2 container columnGap={1} rowGap={1} sx={{ width: "100%" }}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton
            onClickHandler={() => handleOpenPopUp(type)}
            lable="Add"
            startIcon={<MdAdd />}
          />
        </Grid2>

        {!experiencesLoading && !educationsLoading
          ? CurrentData?.map((elem: any, index: number) => {
              const currentYear = new Date().getFullYear();
              const from = elem.year[0].split("-");
              const to = elem.year[1].split("-");
              const yearVal =
                from[0] + " - " + (to[0] == currentYear ? "present" : to[0]);
              return (
                <Grid2
                  size={{
                    md: 5.9,
                  }}
                  key={index}
                >
                  <Card btnDirection="row" size="sm">
                    <AboutCard
                      place={elem.place || elem.course}
                      year={yearVal}
                      title={elem.institution || elem.company_name}
                      sx={{ marginTop: 4 }}
                    />
                  </Card>
                </Grid2>
              );
            })
          : [1, 2, 3, 4, 5, 6]?.map((elem: any, index: number) => {
              return (
                <Grid2
                  size={{
                    md: 5.9,
                  }}
                  key={index}
                >
                  <Card btnDirection="row" size="sm">
                    <Stack
                      sx={{
                        padding: "20px 30px",
                        borderRadius: "20px",
                        background: "var(--cardBg)",
                        width: "100%",
                        "&:hover": {
                          background: "var(--cardhoverBg)",
                        },
                        transition: "background 1s",
                        marginTop: 4,
                      }}
                    >
                      <Skeleton
                        sx={{
                          background: "var(--skeleton)",
                          width: "50%",
                          height: "30px",
                        }}
                        variant="text"
                      />
                      <Skeleton
                        sx={{
                          background: "var(--skeleton)",
                          width: "70%",
                          height: "40px",
                        }}
                        variant="text"
                      />
                      <Skeleton
                        sx={{
                          background: "var(--skeleton)",
                          width: "40%",
                          height: "20px",
                        }}
                        variant="text"
                      />
                    </Stack>
                  </Card>
                </Grid2>
              );
            })}
      </Grid2>
      {CurrentData?.length == 0 && <NoDataFound />}
    </Stack>
  );
}
