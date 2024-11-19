import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Pagination } from "swiper/modules";
import { Box, IconButton, Stack, Typography } from "@mui/material";

export default function GlobalCarousel() {
  return (
    <Stack sx={{ width: "100%", height: "300px" }}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        slidesPerView={2}
      >
        {[{ title: "Test" }, { title: "Next" }].map((elem, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "80%",
                width: "100%",
                boxShadow: "0 1px 1px 1px gray",
                borderRadius: 10,
              }}
              component="img"
              src={"/website.png"}
            />
            <Typography sx={{ fontWeight: "bold", fontFamily: "monospace" }}>
              {elem.title}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
