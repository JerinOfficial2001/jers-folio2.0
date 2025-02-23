"use client";
import usePortfolioFunction from "@/hooks/functions/usePortfolioFunction";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import HeroSection from "./HeroSection";
import Works from "./Works";
import About from "./about";
import Contact from "./contact";
import Skills from "./skills";

type Props = {};

export default function Portfolio({}: Props) {
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
      {portfolio?.skills?.length > 0 && (
        <Skills isLoading={portfolioLoading} skills={portfolio?.skills} />
      )}
      {/* <Testimonial /> */}
      <Contact isLoading={portfolioLoading} contact={portfolio?.contact} />
    </Stack>
  );
}
