import { Box } from "@mui/material";
import React, { useState } from "react";
import { flexStyle } from "@/app/styles/commonStyles";

type Props = { style?: any; isHovered?: boolean };

export default function Comma({ style, isHovered }: Props) {
  return (
    <Box sx={{ ...style, ...flexStyle("row", 1.5, "center", "center") }}>
      <Box
        sx={{
          animation: isHovered ? "iconRotate .5s forwards" : "",
        }}
      >
        <svg
          className="animated"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
            fill="currentColor"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1_f5f74f8-4"
              x1="-0.0363755"
              y1="-0.0729998"
              x2="35.3333"
              y2="-0.0729991"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" stop-color="var(--tj-theme-primary)"></stop>
              <stop
                offset="1"
                stop-color="currentColor"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          animation: isHovered ? "iconRotate1 .5s forwards" : "",
        }}
      >
        <svg
          className="animated"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
            fill="currentColor"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1_f5f74f8-4"
              x1="-0.0363755"
              y1="-0.0729998"
              x2="35.3333"
              y2="-0.0729991"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="1" stop-color="var(--tj-theme-primary)"></stop>
              <stop
                offset="1"
                stop-color="currentColor"
                stop-opacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Box>
  );
}
