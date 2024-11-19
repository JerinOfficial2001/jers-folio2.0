"use client";
import { Stack } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection";
import Works from "./Works";

type Props = {};

export default function Portfolio({}: Props) {
  return (
    <Stack>
      <HeroSection />
      <Works />
    </Stack>
  );
}
