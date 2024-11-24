import {
  HeaderTypography,
  PrimaryTypography,
  SecondaryTypography,
} from "@/app/components/CustomTypography";
import GButton from "@/app/components/global/GButton";
import { getImage } from "@/app/hooks/getImage";
import { useFolioData } from "@/app/hooks/useFolioData";
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";
import { flexStyle } from "@/app/styles/commonStyles";
import { FileDownload } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = {};

export default function HeroSection({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();
  const { folioData } = useFolioData();
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
        <PrimaryTypography name={`I am ${folioData?.name}`} size="lg" />
        <Stack direction={{ md: "column", sm: "row", xs: "row" }}>
          <HeaderTypography
            sx={{
              lineHeight: 1.2,
              textTransform: "uppercase",
              textAlign: { md: "start", sm: "center", xs: "center" },
            }}
            name={folioData?.role}
            variant="teritary"
          />
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
        <SecondaryTypography
          sx={{
            textAlign: { md: "start", sm: "center", xs: "center" },
          }}
          name={folioData?.about}
        />
        <GButton
          variant={folioData?.resume_url ? "primary" : "disabled"}
          lable={folioData?.resume_url ? "Download CV" : "Resume not added"}
          sx={{ minWidth: "250px" }}
          endIcon={<FileDownload />}
        />
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
              folioData?.image || folioData?.image_id
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
