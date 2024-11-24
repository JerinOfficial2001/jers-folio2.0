import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { Grid, Navigation, Pagination } from "swiper/modules";
import { IconButton, Stack } from "@mui/material";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import GlobalCard from "./GlobalCard";
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";
import { flexStyle } from "@/app/styles/commonStyles";
import { usePathname, useRouter } from "next/navigation";

export default function GlobalCarousel({
  next,
  prev,
  gridView,
  cardVariant,
  variant,
  data,
}: {
  next: string;
  prev: string;
  gridView?: boolean;
  cardVariant?:
    | "primary"
    | "secondary"
    | "teritary"
    | "website"
    | "application"
    | "";
  variant?: "primary" | "secondary" | "teritary" | "";
  data?: any;
}) {
  const { isxs, issm } = useMuiBreakpoints();
  const router = useRouter();
  const pathname = usePathname();
  const currentVarient = variant == "primary" ? "secondary" : cardVariant;
  const myData = data ? data : [1, 2, 3];
  return (
    <Stack
      sx={{
        width: "100%",
        height: variant == "primary" ? "500px" : "300px",
        position: "relative",
      }}
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation, Grid]}
        className="mySwiper"
        pagination={
          variant == "primary"
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          variant == "primary"
            ? false
            : {
                nextEl: `.${next}`,
                prevEl: `.${prev}`,
              }
        }
        slidesPerView={isxs || issm ? 1 : variant == "primary" ? 1.4 : 2.2}
        spaceBetween={0}
        // centeredSlides={true}
        grid={
          gridView
            ? {
                rows: 2,
                fill: "row",
              }
            : {}
        }
      >
        {myData?.map((elem: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                ...flexStyle(),
              }}
            >
              <GlobalCard
                onClickHandler={
                  elem?._id
                    ? () => {
                        router.push(pathname + "/" + elem._id);
                      }
                    : undefined
                }
                title={elem.description}
                projectName={elem.title}
                variant={currentVarient}
                data={elem?.images ? elem?.images[elem.primaryImage] : elem}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {variant != "primary" && (
        <IconButton
          className={prev}
          sx={{
            background: "var(--cardBg)",
            "&:hover": {
              background: "var(--secondary)",
              boxShadow: "0 0 10px var(--primary)",
            },
            color: "var(--primary)",
            left: "5px",
            transform: " translateY(-50%)",
            top: "50%",
            position: "absolute",
            zIndex: 11,
          }}
        >
          <ArrowBackIosNewRounded />
        </IconButton>
      )}
      {variant != "primary" && (
        <IconButton
          className={next}
          sx={{
            background: "var(--cardBg)",
            "&:hover": {
              background: "var(--secondary)",
              boxShadow: "0 0 10px var(--primary)",
            },
            color: "var(--primary)",
            right: "5px",
            transform: " translateY(-50%)",
            top: "50%",
            position: "absolute",
            zIndex: 11,
          }}
        >
          <ArrowForwardIosRounded />
        </IconButton>
      )}
    </Stack>
  );
}
