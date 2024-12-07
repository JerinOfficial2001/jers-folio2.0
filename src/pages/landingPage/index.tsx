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
import { ArrowForward } from "@mui/icons-material";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  const router = useRouter();
  //   const getData = () => {
  //     for (let index = 1; index < 35; index++) {
  //       console.log(`${index}:'/femaleAvatar/${index}.png',`);
  //     }
  //   };
  //   getData();
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

  return (
    <Container sx={{ height: "100vh" }}>
      <Box sx={{ ...flexStyle("", "", "", "space-between"), height: "80px" }}>
        <HeaderTypography name={"Jers-folio"} size="md" />
        <GButton
          onClickHandler={handleOpenPopUp}
          lable="Let's get started"
          endIcon={<ArrowForward />}
        />
      </Box>
      <Stack gap={1}>
        <Box sx={{ ...flexStyle("", "", "", "space-between"), marginTop: 5 }}>
          <PrimaryTypography variant="primary" name={`Portfolio's`} />
          {/* <GButton size={"small"} lable="view more" variant="teritary" /> */}
        </Box>
        <Grid2 container rowGap={1} columnGap={2}>
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
