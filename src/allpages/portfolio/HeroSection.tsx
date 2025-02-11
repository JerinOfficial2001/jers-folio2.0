import {
  HeaderTypography,
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import GButton from "@/components/global/GButton";
import GIconButton from "@/components/global/GIconButton";
import { links } from "@/constants/Json";
import { getImage } from "@/hooks/getImage";
import { useFolioData } from "@/hooks/useFolioData";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { flexStyle } from "@/styles/commonStyles";
import { link } from "@/types/interfaces";
import {
  extractGitHubUsername,
  extractInstagramUsername,
  extractLinkedInUsername,
} from "@/utils/methods";
import { FileDownload } from "@mui/icons-material";
import { Box, Container, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = { isLoading: boolean; user: any };

export default function HeroSection({ isLoading, user: folioData }: Props) {
  const { isxs, issm } = useMuiBreakpoints();
  // const text = "MERN STACK";
  // const title2 = "APP DEVELOPER";
  // const title = title2
  //   ? issm || isxs
  //     ? `${text} + ${title2}`
  //     : `${text} + `
  //   : `${text}`;

  return (
    <Container
      id="home"
      sx={{
        ...flexStyle(
          { md: "row", sm: "column-reverse", xs: "column-reverse" },
          "",
          "",
          "center"
        ),
        height: "90dvh",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          width: { md: "50%", sm: "100%", xs: "100%" },
          gap: { md: 4, sm: 2, xs: 2 },
          alignItems: { md: "flex-start", sm: "center", xs: "center" },
        }}
      >
        {isLoading ? (
          <Skeleton
            variant="rounded"
            sx={{
              width: "400px",
              height: "30px",
              borderRadius: "10px",
              background: "var(--skeleton)",
            }}
          />
        ) : (
          <PrimaryTypography
            name={`I'm ${folioData?.name || "Jersfolio"}`}
            size="lg"
          />
        )}
        <Stack direction={{ md: "column", sm: "row", xs: "row" }}>
          {isLoading ? (
            <Skeleton
              variant="rounded"
              sx={{
                width: "400px",
                height: "40px",
                borderRadius: "10px",
                background: "var(--skeleton)",
              }}
            />
          ) : (
            <HeaderTypography
              sx={{
                lineHeight: 1.2,
                textTransform: "uppercase",
                textAlign: { md: "start", sm: "center", xs: "center" },
              }}
              name={folioData?.role}
              variant="teritary"
            />
          )}
          {/* {!issm && !isxs && (
            <HeaderTypography
              sx={{
                lineHeight: 1.2,
                textTransform: "uppercase",
              }}
              name={title2}
              variant="teritary"
            />
          )} */}
        </Stack>
        {isLoading ? (
          [1, 2, 3].map((elem) => (
            <Skeleton
              key={elem}
              variant="rounded"
              sx={{
                width: elem == 3 ? "70%" : "100%",
                height: "15px",
                borderRadius: "10px",
                background: "var(--skeleton)",
              }}
            />
          ))
        ) : (
          <SecondaryTypography
            sx={{
              textAlign: { md: "start", sm: "center", xs: "center" },
            }}
            name={folioData?.about}
          />
        )}
        <Box
          sx={{ ...flexStyle({ md: "row", sm: "column", xs: "column" }, 1) }}
        >
          {isLoading ? (
            <Skeleton
              variant="rounded"
              sx={{
                width: "250px",
                height: "56.6px",
                borderRadius: "50px",
                background: "var(--skeleton)",
              }}
            />
          ) : (
            <GButton
              variant={folioData?.resumes ? "primary" : "disabled"}
              lable={folioData?.resumes ? "Download CV" : "Resume not added"}
              sx={{ minWidth: "250px" }}
              endIcon={<FileDownload />}
              onClickHandler={() =>
                window.open(folioData?.resumes[0]?.url, "_blank")
              }
            />
          )}
          <Stack direction={"row"} gap={1}>
            {isLoading
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
              : folioData?.links?.map((elem: link, index: number) => {
                  const userName =
                    elem.type == "linkedin"
                      ? extractLinkedInUsername(elem.url)
                      : elem.type == "github"
                      ? extractGitHubUsername(elem.url)
                      : elem.type == "instagram"
                      ? extractInstagramUsername(elem.url)
                      : links[elem.type]?.label;
                  return (
                    <GIconButton
                      onClickHandler={() => {
                        window.open(elem.url, "_blank");
                      }}
                      title={userName}
                      icon={links[elem.type]?.icon}
                      key={index}
                    />
                  );
                })}
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          ...flexStyle("column"),
          width: { md: "50%", sm: "100%", xs: "100%" },
          padding: { md: 5, sm: 5, xs: 1 },
        }}
      >
        <Box
          sx={{
            background: "var(--skeleton)",
            height: { sm: "430px", xs: "300px" },
            width: { sm: "380px", xs: "250px" },
            borderRadius: { sm: 20, xs: 10 },
            transform: "rotate(7deg)",
            "&:hover": {
              transform: "rotate(0deg)",
              boxShadow: "0px 0px 10px 0px var(--boxShadow)",
            },
            boxShadow: "-9px 9px 10px 0px var(--boxShadow)",
            transition: ".3s",
            cursor: "pointer",
            overflow: "hidden",
            ...flexStyle(),
          }}
        >
          <Box
            component={"img"}
            alt="profile"
            src={getImage(
              folioData?.gender,
              folioData?.image?.url || folioData?.image || folioData?.image_id
            )}
            sx={{
              objectFit: "cover",
              height: "120%",
              width: "120%",
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
