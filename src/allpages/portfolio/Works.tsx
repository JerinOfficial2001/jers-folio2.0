import {
  HeaderTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import GlobalCarousel from "@/components/global/GCarousel";
import GlobalCard from "@/components/global/GlobalCard";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import useProjects from "@/hooks/useProjects";
import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Grid2 } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  works: any;
  isLoading: boolean;
};

export default function Works({ works, isLoading }: Props) {
  const { isxs, issm } = useMuiBreakpoints();
  const { websites: webProjectDatas, applications: appProjects } = works || {
    websites: [],
    applications: [],
  };
  const router = useRouter();
  const pathname: any = usePathname();
  const { setIsLoading } = useGlobalStore();
  return (
    <Box
      sx={{
        background: "var(--secondaryBg)",
        minHeight: "90dvh",
        paddingBottom: { md: 15, sm: 5, xs: 5 },
      }}
      id="works"
    >
      <Container
        sx={{
          ...flexStyle("column", "", ""),
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
        maxWidth={isxs || issm ? "xl" : "lg"}
      >
        {webProjectDatas?.length > 0 && (
          <HeaderTypography
            name="My Recent Works"
            variant="teritary"
            size="lg"
          />
        )}
        {webProjectDatas?.length > 0 && (
          <SecondaryTypography
            name={"Websites"}
            sx={{ width: "90%", margin: "50px 0 20px 0" }}
          />
        )}
        {webProjectDatas?.length > 0 && (
          <GlobalCarousel
            next="swiper-button-next"
            prev="swiper-button-prev"
            data={webProjectDatas}
          />
        )}
        {appProjects?.length > 0 && (
          <SecondaryTypography
            name={"Application"}
            sx={{ width: "90%", margin: "50px 0 20px 0" }}
          />
        )}
        {appProjects?.length > 0 && (
          <Grid2
            container
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            rowGap={2}
            columnGap={2}
          >
            {appProjects?.map((elem: any, index: number) => {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: 3.87,
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <GlobalCard
                    count={index + 1}
                    projectName={elem.title}
                    // title={elem.description}
                    variant="primary"
                    data={elem.icon}
                    onClickHandler={() => {
                      router.push(pathname + "/" + elem._id);
                      setIsLoading(true);
                    }}
                  />
                </Grid2>
              );
            })}
          </Grid2>
        )}
      </Container>
    </Box>
  );
}
