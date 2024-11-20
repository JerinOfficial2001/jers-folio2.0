"use client";
import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Works from "./Works";
import About from "./about";
import Skills from "./skills";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Testimonial from "./testimonial";
import Contact from "./contact";

type Props = {};

export default function Portfolio({}: Props) {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to: any, element: any) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <Stack>
      <HeroSection />
      <Works />
      <About />
      <Skills />
      <Testimonial />
      <Contact />
    </Stack>
  );
}
