"use client";
import {
  HeaderTypography,
  PrimaryTypography,
} from "@/components/CustomTypography";
import GButton from "@/components/global/GButton";
import GlobalCard from "@/components/global/GlobalCard";
import GlobalPopUp from "@/components/global/GlobalPopUp";
import { PortfolioDatas } from "@/constants/Json";
import { useFolioData } from "@/hooks/useFolioData";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { isAuthenticated } from "@/utils/auth";
import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  const router = useRouter();
  const { handleOpenPopUp, setIsLoading } = useGlobalStore();
  const { folioData } = useFolioData();
  const ClientID: any = process.env.NEXT_PUBLIC_GOOGLEAUTHCLIENTID;
  const pathname: any = usePathname();
  const userName = pathname.split("/")[1];
  const handleRoute = (elem: any) => {
    setIsLoading(true);
    if (userName != folioData?.user_name) {
      router.push(`/${elem.user_name}`);
    }
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
    <Container sx={{ height: "100vh" }}>
      <Box sx={{ ...flexStyle("", "", "", "space-between"), height: "80px" }}>
        <HeaderTypography name={"Jers-folio"} size="md" />
        <GButton
          onClickHandler={handleButton}
          lable={isAuthenticated() ? "Go to dashboard" : "Let's get started"}
          endIcon={<ArrowForward />}
        />
      </Box>
      <Stack
        direction={"row"}
        gap={1}
        sx={{ height: "70vh", width: "100%", marginBottom: 12 }}
      >
        <Box
          sx={{
            ...flexStyle("column", "", "flex-start", "center"),
            width: "40%",
            height: "100%",
          }}
        >
          <HeaderTypography name={`Welcome to`} />
          <PrimaryTypography name={`Jersfolio Builder`} />
          {/* <GButton size={"small"} lable="view more" variant="teritary" /> */}
        </Box>
        <Box
          sx={{
            width: "60%",
            ...flexStyle("column", "", "center", "center"),
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            component={"img"}
            src="/landingPage/dashboard.png"
            sx={{
              borderRadius: "10px",
              height: "240px",
              width: "490px",
              boxShadow: "0px 0px 2px 2px var(--secondary)",
              objectFit: "contain",
            }}
          />
          <Box
            component={"img"}
            src="/landingPage/project.png"
            sx={{
              height: "179px",
              width: "300px",
              position: "absolute",
              bottom: 20,
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
              height: "300px",
              width: "206px",
              position: "absolute",
              bottom: 0,
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
          {PortfolioDatas.map((elem: any, index: number) => {
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
