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
import { useFolioData } from "@/hooks/useFolioData";
import usePortfolioFunction from "@/hooks/functions/usePortfolioFunction";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export default function Portfolio({}: Props) {
  const { folioData } = useFolioData();
  const router = useRouter();
  const pathname: any = usePathname();
  const userName = pathname.split("/")[1];
  const { portfolio, portfolioLoading } = usePortfolioFunction({
    single: userName,
  });
  useEffect(() => {
    Events.scrollEvent.register("begin", (to: any, element: any) => {
      // console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to: any, element: any) => {
      // console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Stack>
      <HeroSection isLoading={portfolioLoading} user={portfolio?.user} />
      {(portfolio?.works?.websites?.length > 0 ||
        portfolio?.works?.applications?.length) && (
        <Works isLoading={portfolioLoading} works={portfolio?.works} />
      )}
      <About isLoading={portfolioLoading} about={portfolio?.about} />
      <Skills isLoading={portfolioLoading} skills={portfolio?.skills} />
      <Testimonial />
      <Contact isLoading={portfolioLoading} contact={portfolio?.contact} />
    </Stack>
  );
}
