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

export default function GlobalCarousel({
  next,
  prev,
  gridView,
  cardVariant,
  variant,
}: {
  next: string;
  prev: string;
  gridView?: boolean;
  cardVariant?: "primary" | "secondary" | "teritary" | "";
  variant?: "primary" | "secondary" | "teritary" | "";
}) {
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
        slidesPerView={variant == "primary" ? 1.4 : 2.2}
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
        {[
          { title: "Test" },
          { title: "Next" },
          { title: "Next2" },
          { title: "Next1" },
          { title: "Next3" },
          { title: "Next4" },
        ].map((elem, index) => (
          <SwiperSlide key={index}>
            <GlobalCard
              title="test"
              projectName={elem.title}
              variant={variant == "primary" ? "secondary" : cardVariant}
            />
          </SwiperSlide>
        ))}
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
            left: "10px",
            transform: " translateY(-50%)",
            top: "50%",
            position: "absolute",
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
            right: "10px",
            transform: " translateY(-50%)",
            top: "50%",
            position: "absolute",
          }}
        >
          <ArrowForwardIosRounded />
        </IconButton>
      )}
    </Stack>
  );
}
