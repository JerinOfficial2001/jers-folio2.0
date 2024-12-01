import {
  HeaderTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import GlobalCarousel from "@/components/global/GCarousel";
import GlobalCard from "@/components/global/GlobalCard";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import useProjects from "@/hooks/useProjects";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Grid2 } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Works({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();
  const { webProjectDatas, appProjects } = useProjects();
  const router = useRouter();
  const pathname = usePathname();
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
        <HeaderTypography name="My Recent Works" variant="teritary" size="lg" />
        <SecondaryTypography
          name={"Websites"}
          sx={{ width: "90%", margin: "50px 0 20px 0" }}
        />
        <GlobalCarousel
          next="swiper-button-next"
          prev="swiper-button-prev"
          data={webProjectDatas}
        />
        <SecondaryTypography
          name={"Application"}
          sx={{ width: "90%", margin: "50px 0 20px 0" }}
        />
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
                  data={{ image: elem.icon }}
                  onClickHandler={() => {
                    router.push(pathname + "/" + elem._id);
                  }}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
}
