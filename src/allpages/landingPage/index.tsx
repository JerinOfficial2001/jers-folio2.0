"use client";
import {
  HeaderTypography,
  PrimaryTypography,
} from "@/components/CustomTypography";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GlobalPopUp from "@/components/global/GlobalPopUp";
import usePortfolioFunction from "@/hooks/functions/usePortfolioFunction";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { isAuthenticated } from "@/utils/auth";
import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Grid2, Skeleton, Stack } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  const router = useRouter();
  const { handleOpenPopUp, setIsLoading } = useGlobalStore();
  const { portfolios, portfoliosLoading } = usePortfolioFunction({
    portFolios: true,
  });
  const ClientID: any = process.env.NEXT_PUBLIC_GOOGLEAUTHCLIENTID;

  const handleRoute = (elem: any) => {
    setIsLoading(true);
    router.push(`/${elem.username}`);
  };
  const handleButton = () => {
    if (isAuthenticated()) {
      setIsLoading(true);
      router.push("/dashboard");
    } else {
      handleOpenPopUp();
    }
  };
  return (
    <Container className="!bg-[red]" sx={{ height: "100vh" }}>
      <Box
        sx={{
          ...flexStyle(
            { md: "row", sm: "column", xs: "column" },
            "",
            "",
            "space-between"
          ),
          height: "80px",
        }}
      >
        <HeaderTypography name={"Jers-folio"} size="md" />
        <GButton
          onClickHandler={handleButton}
          lable={isAuthenticated() ? "Go to dashboard" : "Let's get started"}
          endIcon={<ArrowForward />}
        />
      </Box>
      <Stack
        direction={{ md: "row", sm: "column", xs: "column" }}
        gap={1}
        sx={{
          height: { md: "70vh", sm: "auto", xs: "auto" },
          width: "100%",
          marginBottom: { md: 12, sm: 2, xs: 2 },
        }}
      >
        <Box
          sx={{
            ...flexStyle("column", "", "flex-start", "center"),
            width: { md: "40%", sm: "100%", xs: "100%" },
            height: { md: "100%", sm: "auto", xs: "auto" },
          }}
        >
          <HeaderTypography name={`Welcome to`} />
          <PrimaryTypography name={`Jersfolio Builder`} />
          {/* <GButton size={"small"} lable="view more" variant="teritary" /> */}
        </Box>
        <Box
          sx={{
            width: { md: "60%", sm: "100%", xs: "100%" },
            ...flexStyle("column", "", "center", "center"),
            position: "relative",
            height: { md: "100%", sm: "auto", xs: "auto" },
          }}
        >
          <Box
            component={"img"}
            src="/landingPage/dashboard.png"
            sx={{
              borderRadius: "10px",
              height: { md: "240px", sm: "120px", xs: "120px" },
              width: { md: "490px", sm: "230px", xs: "230px" },
              boxShadow: "0px 0px 2px 2px var(--secondary)",
              objectFit: "contain",
            }}
          />
          <Box
            component={"img"}
            src="/landingPage/project.png"
            sx={{
              height: { md: "179px", sm: "100px", xs: "100px" },
              width: { md: "300px", sm: "167px", xs: "167px" },
              position: "absolute",
              bottom: { md: 20, sm: -35, xs: -35 },
              left: 0,
              borderRadius: "10px",
              boxShadow: "0px 0px 2px 2px var(--secondary)",
              objectFit: "contain",
            }}
          />
          <Box
            component={"img"}
            src="/landingPage/builds.png"
            sx={{
              height: { md: "300px", sm: "115px", xs: "115px" },
              width: { md: "206px", sm: "80px", xs: "80px" },
              position: "absolute",
              bottom: { md: 0, sm: -40, xs: -40 },
              right: 0,
              borderRadius: "10px",
              boxShadow: "0px 0px 2px 2px var(--secondary)",
              objectFit: "contain",
            }}
          />
        </Box>
      </Stack>
      <Stack gap={1} sx={{ paddingBottom: 10 }}>
        <Box sx={{ ...flexStyle("", "", "", "space-between"), marginTop: 5 }}>
          <PrimaryTypography variant="primary" name={`Portfolio's`} />
          {/* <GButton size={"small"} lable="view more" variant="teritary" /> */}
        </Box>
        <Grid2 container rowGap={1} columnGap={2} sx={{ width: "100%" }}>
          {portfoliosLoading
            ? [1, 2, 3, 4, 5, 6].map((elem: any) => {
                return (
                  <Grid2
                    size={{
                      md: 3.87,
                      sm: 6,
                      xs: 12,
                    }}
                    key={elem}
                  >
                    <Skeleton
                      sx={{
                        background: "var(--skeleton)",
                        height: "150px",
                        borderRadius: "10px",
                      }}
                      variant="rectangular"
                    />
                  </Grid2>
                );
              })
            : portfolios?.map((elem: any, index: number) => {
                return (
                  <Grid2
                    size={{
                      md: 3.87,
                      sm: 6,
                      xs: 12,
                    }}
                    key={index}
                  >
                    <GlobalCard
                      projectName={elem.role}
                      title={elem.name}
                      variant="teritary"
                      onClickHandler={() => {
                        handleRoute(elem);
                      }}
                      data={elem}
                    />
                  </Grid2>
                );
              })}
        </Grid2>
      </Stack>

      <GoogleOAuthProvider clientId={ClientID}>
        <GlobalPopUp variant="signUp" />
      </GoogleOAuthProvider>
    </Container>
  );
}
